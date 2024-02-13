const User = require('../models/usermodel');

exports.getUsersForSidebar = async (req, res) => {
    try {
        // Log the value of req.user to see if it's being set correctly
        console.log('req.user:', req.session.userId);

        const loggedInUserId = req.session.userId ? req.session.userId : null;

        if (!loggedInUserId) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json({ allUsers });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

