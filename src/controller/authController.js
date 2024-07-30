const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwt');

const registerUser = async (req, res) => {
    const { userName, userEmail, password, isJobProvider } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ userEmail });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        user = new User({
            userName,
            userEmail,
            password: await bcrypt.hash(password, 10),
            isJobProvider
        });

        await user.save();

        // Generate JWT token
        const token = generateToken(user);

        res.status(200).json({
            status: 200,
            message: 'User registered successfully',
            token
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = { registerUser };
