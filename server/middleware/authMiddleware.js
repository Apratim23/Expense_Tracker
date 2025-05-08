const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId; // ✅ Set only the userId
    next();
  } catch (err) {
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

module.exports = protect;


//So Middleware is basically used to protect certain routes in your application.
// How do you use it? You can use it in your routes like this:
// In layman terms, middleware just helps the routes of the pages to be protected and not be accessed by anyone who is not logged in.