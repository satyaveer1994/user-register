const jwt = require('jsonwebtoken');
const secret = 'yourJWTSecretKey';

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, isJobProvider: user.isJobProvider },
        secret,
        { expiresIn: '1h' }
    );
};

module.exports = { generateToken };
