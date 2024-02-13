const User = require('../models/usermodel');

exports.getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.headers.jwt; // Assuming you store user ID in the JWT payload

        if (!loggedInUserId) {
            // Handle the case where user is not logged in
            return res.status(401).json({ error: 'Unauthorized - User not logged in' });
        }

        const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json({ allUsers });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

