"use strict";
var mongoose = require('mongoose');
var reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    username: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    timeCreate: {
        type: Date,
        required: true,
    },
    rating: {
        type: Number,
        required: false,
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Review', reviewSchema);
