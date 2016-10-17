"use strict";
var mongoose = require('mongoose');
var customDrumSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    imgUrl: {
        type: String,
        required: false
    },
    instrument: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Instrument"
        }]
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('CustomDrum', customDrumSchema);
