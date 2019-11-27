var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var fileUpload = require('express-fileupload');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pantisRouter = require('./routes/pantis');
var sesamasRouter = require('./routes/sesamas');
var danasRouter = require('./routes/danas');

var app = express();
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/final-project-db', {useNewUrlParser: true});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/pantis',pantisRouter);
app.use('/api/sesamas',sesamasRouter);
app.use('/api/danas',danasRouter);

module.exports = app;
