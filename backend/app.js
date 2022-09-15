var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
require('dotenv').config()

const Database = require('./database/db_config/db.connect');
Database.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))
    
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;
