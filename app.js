"use strict";
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var bearerToken = require('express-bearer-token');
var expressValidator = require('express-validator');
var index_1 = require('./routes/index');
var userRoute_1 = require('./routes/userRoute');
var instrumentRoute_1 = require('./routes/instrumentRoute');
var brandRoute_1 = require('./routes/brandRoute');
var customDrumRoute_1 = require('./routes/customDrumRoute');
var reviewRoute_1 = require('./routes/reviewRoute');
var app = express();
var db_1 = require('./db');
db_1.default.connect();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bearerToken());
app.use(passport.initialize());
app.use(passport.session());
app.use(expressValidator());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/ngApp', express.static(path.join(__dirname, 'ngApp')));
app.use('/api', express.static(path.join(__dirname, 'api')));
app.use('/', index_1.default);
app.use('/api/users', userRoute_1.default);
app.use('/api/instruments', instrumentRoute_1.default);
app.use('/api/brands', brandRoute_1.default);
app.use('/api/customDrums', customDrumRoute_1.default);
app.use('/api/reviews', reviewRoute_1.default);
app.get('/*', function (req, res, next) {
    if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
        return next({ status: 404, message: 'Not Found' });
    }
    else {
        return res.render('index');
    }
});
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
app.use(function (err, req, res, next) {
    res.status(err['status'] || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
