const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const connectToMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, { // Optional, but doesn't harm in older versions // Optional, but doesn't harm in older versions
            serverSelectionTimeoutMS: 5000, // 5 seconds timeout for server selection
            socketTimeoutMS: 45000, // 45 seconds socket timeout
        });

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        // Retry connection after a delay
        setTimeout(() => connectToMongodb(), 5000);
    }
};

module.exports = connectToMongodb;