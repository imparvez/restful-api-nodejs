const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;
require('dotenv/config');

// Middlewares
app.use(cors())
app.use(bodyParser.json());

// Import Routes
const postRoute = require('./routes/posts')
const homeRoute = require('./routes/home')

// Creating Route MiddleWare
app.use('/posts', postRoute)
app.use('/', homeRoute)

// Connect to database
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => console.log('Connected'));

// Start your app
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});