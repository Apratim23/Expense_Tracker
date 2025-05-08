const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

userSchema.pre('save', async function() {
    if(!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = function(inputPassword){
    return bcrypt.compare(inputPassword, this.password);
}

module.exports = mongoose.model('User', userSchema);
// This code defines a Mongoose schema for a User model. It includes fields for name, email, and password.