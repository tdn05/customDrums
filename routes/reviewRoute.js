"use strict";
var express = require('express');
var review_1 = require('../models/review');
var reviewRoute = express.Router();
reviewRoute.delete('/:id', function (req, res) {
    review_1.default.findByIdAndRemove(req.params['id']).then(function () {
        res.sendStatus(200);
    }).catch(function () {
        res.sendStatus(400);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reviewRoute;
