"use strict";
var mongoose = require('mongoose');
var user_1 = require('./models/user');
var customDrum_1 = require('./models/customDrum');
var URL = 'mongodb://admin:Secret123!@ds035776.mlab.com:35776/coolkidsdata';
var Database = (function () {
    function Database() {
    }
    Database.connect = function () {
        mongoose.connect(URL);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'ConnectionError'));
        db.once('open', console.log.bind(console, 'Connected to PORT 3000'));
        customDrum_1.default.find('customDrums').then(function (customDrum) {
            if (customDrum.length == 0) {
                customDrum_1.default.create({ user: 'unknown' }).then(function () {
                    console.log('Unknown user created');
                });
            }
            else {
                console.log('already in database');
            }
        })
            .catch(function (err) {
            console.log('error');
        });
        user_1.default
            .findOne({ email: 'tduynguyen05@gmail.com' })
            .then(function (user) {
            if (!user) {
                var adminUser = new user_1.default();
                adminUser.username = 'tduynguyen05@gmail.com';
                adminUser.email = 'tduynguyen05@gmail.com';
                adminUser.setPassword('Secret123!');
                adminUser.admin = true;
                adminUser
                    .save()
                    .then(function () {
                    console.log('Admin successfully created');
                })
                    .catch(function () {
                    console.log('Admin creation went wrong');
                });
            }
            else {
                console.log('Admin already exists in Database');
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return Database;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Database;
