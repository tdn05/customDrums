"use strict";
var express = require('express');
var mongodb = require('mongodb');
var brand_1 = require('../models/brand');
var brandRoute = express.Router();
var ObjectId = mongodb.ObjectID;
brandRoute.get('/', function (req, res) {
    brand_1.default.find().populate('instrument').then(function (brands) {
        res.send(brands);
    }).catch(function (err) {
        res.sendStatus(err);
    });
});
brandRoute.get('/:id', function (req, res) {
    brand_1.default.findById(req.params['id']).then(function (brand) {
        res.send(brand);
    }).catch(function (err) {
        res.send(err);
    });
});
brandRoute.post('/', function (req, res) {
    var brand = new brand_1.default();
    brand.brand = req.body.brand;
    brand.imgUrl = req.body.imgUrl;
    brand.instrument = req.body.instrument;
    brand.description = req.body.description;
    brand.reviews = req.body.reviews;
    brand.rating = req.body.rating;
    brand.save().then(function (brand) {
        res.status(201).send(brand);
    }).catch(function (err) {
        res.status(400).send(err);
    });
});
brandRoute.post('/instrument/:brandId', function (req, res) {
    var instId = new ObjectId(req.body._id);
    var brandId = new ObjectId(req.params['brandId']);
    brand_1.default.update({ _id: brandId }, { $push: { instrument: instId } }).then(function (brand) {
        res.send(brand);
        console.log('instrument added successfully');
    }).catch(function (err) {
        res.status(400).send(err);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = brandRoute;
