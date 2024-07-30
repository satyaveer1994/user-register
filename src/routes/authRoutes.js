const express = require('express');
const router = express.Router();
const { registerUser } = require('../controller/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', registerUser);

// Example of a protected route
router.get('/protected', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
