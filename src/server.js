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

// Logger - basic to console
app.use(logger('dev'));
// Log all req to access.log
app.use(logger('short', {
  stream: fs.createWriteStream(path.join(__dirname, '../api.log'), { flags: 'a' })
}))

// Routes
app.use('/api/user', require('./routes/authRoute'));
app.use('/api/computers', require('./routes/computerRoute'));
app.use('/api/users', require('./routes/userRoute'));
app.use('/api/keys', require('./routes/apiKeyRoute'));
app.use('/api/ps', require('./routes/psEventRoute'));

app.listen(PORT, console.log(`Server started on port: ${PORT}`))