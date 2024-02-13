const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser'); // Correct import
const messageRoutes = require('./Routes/messageRoutes');
const dotenv = require('dotenv').config({ path: path.join(__dirname, '.env') });
const app = express();//const session = require('express-session');

const session = require('express-session');

app.use(
    session({
      secret:process.env.JWT_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }, // Set secure to true if using HTTPS
    })
  );
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes');
const authRoutes = require('./Routes/authRoutes');
const connectToMongodb = require('./db/connecttoMongodb');

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(cookieParser()); // Correct usage

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use("/api/messages", messageRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    connectToMongodb();
    console.log(`Server running on port ${PORT}`);
});
