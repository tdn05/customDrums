"use strict";
var express = require('express');
var instrument_1 = require('../models/instrument');
var review_1 = require('../models/review');
var mongodb = require('mongodb');
var jwt = require('jsonwebtoken');
var instrumentRoute = express.Router();
var ObjectId = mongodb.ObjectID;
instrumentRoute.post('/', function (req, res) {
    var instrument = new instrument_1.default();
    instrument.instrument = req.body.instrument;
    instrument.brand = req.body.brand;
    instrument.make = req.body.make;
    instrument.imgUrl = req.body.imgUrl;
    instrument.fullDescription = req.body.fullDescription;
    instrument.price = req.body.price;
    instrument.rating = req.body.rating;
    instrument.reviews = req.body.reviews;
    instrument.sampleVid = req.body.sampleVid;
    instrument.save().then(function (instrument) {
        res.status(201).send(instrument);
    }).catch(function (err) {
        res.status(400).send(err);
    });
});
instrumentRoute.get('/', function (req, res) {
    instrument_1.default.find().populate('reviews').then(function (instruments) {
        res.send(instruments);
    }).catch(function (err) {
        res.send(err);
    });
});
instrumentRoute.get('/:id', function (req, res) {
    instrument_1.default.findById(req.params['id']).populate('reviews')
        .then(function (instrument) {
        res.send(instrument);
    }).catch(function (err) {
        res.status(500).send({ err: err });
    });
});
instrumentRoute.post('/reviews/:instId', authorize, function (req, res) {
    var instId = new ObjectId(req.params['instId']);
    console.log(instId);
    var review = new review_1.default();
    review.message = req.body.message;
    review.timeCreate = new Date();
    review.rating = 0;
    review.userId = req.user.id;
    review.username = req.user.username;
    review.save()
        .then(function (review) {
        var revId = new ObjectId(review._id);
        instrument_1.default.update({ _id: instId }, { $push: { reviews: revId } })
            .then(function () {
            res.sendStatus(201);
        }).catch(function () {
            res.sendStatus(404);
        });
    }).catch(function () {
        res.sendStatus(400);
    });
});
instrumentRoute.put('/', function (req, res) {
    instrument_1.default.findByIdAndUpdate(req.body._id, req.body).then(function (instrument) {
        res.send(instrument);
    }).catch(function (err) {
        res.status(404).send(err);
    });
});
function authorize(req, res, next) {
    var token = req['token'];
    console.log(token);
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
exports.default = instrumentRoute;
