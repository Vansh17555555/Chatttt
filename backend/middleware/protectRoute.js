const jwt = require('jsonwebtoken');
const User = require('../models/usermodel'); // Make sure the path is correct

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized route' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ error: 'Unauthorized - invalid token' });
        }

        const user = await User.findOne({ _id: decoded.userId }).select('-password');

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        req.user = user;
        console.log(req.user);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = protectRoute;
