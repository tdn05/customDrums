"use strict";
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var crypto = require('crypto-js');
var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        set: function (value) {
            return value.toLowerCase().trim();
        }
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: false,
    }
});
userSchema.method('setPassword', function (password) {
    this.password = crypto.AES.encrypt(password, 'SuperSecret');
});
userSchema.method('validatePassword', function (password) {
    var hash = crypto.AES.decrypt(this.password, 'SuperSecret');
    return password === hash.toString(crypto.enc.Utf8);
});
userSchema.method('generateToken', function () {
    return jwt.sign({
        id: this._id,
        username: this.username,
        admin: this.admin,
    }, 'SuperSecret');
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('User', userSchema);
