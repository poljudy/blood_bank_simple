const express = require('express');
//dot config
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
//--------
const colors = require('colors');
const morgan = require("morgan");
const cors = require("cors");
// MongoDB connection
const connectDB = require("./config/db")
const path = require('path')

connectDB();

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// used for render cloud
app.use('/test', require('./routes/testRoutes'))
app.use('/auth', require('./routes/authRoutes'))
app.use('/inventory', require('./routes/inventoryRoutes'))
app.use('/analytics', require('./routes/analyticsRoutes'))
app.use('/admin', require('./routes/adminRoutes'))

//port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
    console.log(`Blood Bank Server is Running in ${process.env.DEV_MODE} Mode on PORT ${process.env.PORT}.`.bgYellow.black);
})