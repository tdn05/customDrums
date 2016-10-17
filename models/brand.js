"use strict";
var mongoose = require('mongoose');
var brandSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    instrument: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Instrument'
        }],
    imgUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Brand', brandSchema);
