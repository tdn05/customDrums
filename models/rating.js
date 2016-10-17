"use strict";
var mongoose = require('mongoose');
var ratingSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
    },
    user: {
        type: String,
        required: false,
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Rating', ratingSchema);
