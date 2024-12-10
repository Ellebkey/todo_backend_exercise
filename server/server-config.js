require('dotenv').config()
const express = require('express');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos.routes');
const authRoutes = require('./routes/auth.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Routes
app.use('/api/todos', todoRoutes);
app.use('/api/auth', authRoutes);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

module.exports = app;
