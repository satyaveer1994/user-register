const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    userEmail: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isJobProvider: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', UserSchema);
