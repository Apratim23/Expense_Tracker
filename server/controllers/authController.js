const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT and set it as HTTP-only cookie
const createToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '30d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });

  return token;
};

// @desc    Register new user
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    createToken(res, user._id);

    res.status(201).json({
      message: 'User registered',
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: 'Register error', error: err.message });
  }
};

// @desc    Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: 'Invalid credentials' });

    createToken(res, user._id);

    res.status(200).json({
      message: 'Login successful',
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: 'Login error', error: err.message });
  }
};

// @desc    Logout user
exports.logout = async (req, res) => {
  res.clearCookie('jwt', {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

// @desc    Refresh token
exports.refresh = async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) return res.status(401).json({ message: 'No token found' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    createToken(res, decoded.userId);
    res.status(200).json({ message: 'Token refreshed' });
  } catch (err) {
    res.status(401).json({ message: 'Token expired or invalid' });
  }
};
