"use strict";
var express = require('express');
var passport = require('passport');
var passportLocal = require('passport-local');
var jwt = require('jsonwebtoken');
var user_1 = require('../models/user');
var userRouter = express.Router();
var LocalStrategy = passportLocal.Strategy;
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    user_1.default.findById(id, function (err, user) {
        done(err, user);
    });
});
passport.use(new LocalStrategy(function (username, password, done) {
    user_1.default.findOne({ username: username.trim() })
        .then(function (user) {
        if (!user) {
            console.log('no user found');
            return done(null, false, { message: 'incorrect username' });
        }
        if (!user.validatePassword(password)) {
            console.log('incorrect pw');
            return done(null, false, { message: 'incorrect password' });
        }
        user.password = null;
        return done(null, user);
    })
        .catch(function (err) {
        return done(err);
    });
}));
userRouter.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
userRouter.post('/register', register, passport.authenticate('local', { failureRedirect: '/login' }), login);
function register(req, res, next) {
    console.log(req.body);
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'Password is requried').notEmpty();
    req.checkBody('confirmPassword', 'Password do not match').equals(req.body.password);
    var errors = req.validationErrors();
    if (errors) {
        res.status(400).send(errors);
    }
    else {
        var newUser = new user_1.default();
        newUser.username = req.body.username;
        newUser.email = req.body.email;
        newUser.setPassword(req.body.password);
        newUser
            .save()
            .then(function (user) {
            next();
        })
            .catch(function () {
        });
    }
    function login(req, res) {
        if (req.isAuthenticated()) {
            var data = {
                token: req.user.generateToken(),
                username: req.user.username,
                admin: req.user.admin,
                email: req.user.email,
            };
            console.log(data);
            res.send(data);
        }
    }
}
userRouter.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), login);
function login(req, res) {
    if (req.isAuthenticated()) {
        var data = {
            token: req.user.generateToken(),
            username: req.user.username,
            admin: req.user.admin,
            email: req.user.email,
        };
        console.log(data);
        res.send(data);
    }
    else {
        res.send('you are not authenticated');
    }
}
function authorize(req, res, next) {
    var token = req['token'];
    jwt.verify(token, 'SuperSecret', function (err, decoded) {
        if (err) {
            res.sendStatus(401);
        }
        else {
            req.user = decoded;
            console.log(decoded);
            next();
        }
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = userRouter;
