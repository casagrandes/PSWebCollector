const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const db = require('./db');


// Initialize Express
const app = express();
const PORT = process.env.SERVER_PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Logger
app.use(logger('dev'));

// Routes
app.use('/api/computers', require('./routes/computerRoute'));
app.use('/api/users', require('./routes/userRoute'));

app.listen(PORT, console.log(`Server started on port: ${PORT}`))