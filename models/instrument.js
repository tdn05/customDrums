"use strict";
var mongoose = require('mongoose');
var instrumentSchema = new mongoose.Schema({
    instrument: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    make: {
        type: String,
        required: true,
    },
    fullDescription: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sampleVid: {
        type: String,
        required: true,
    },
    reviews: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }],
    rating: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rating'
    },
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Instrument', instrumentSchema);
