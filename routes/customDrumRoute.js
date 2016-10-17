"use strict";
var express = require('express');
var mongodb = require('mongodb');
var customDrum_1 = require('../models/customDrum');
var jwt = require('jsonwebtoken');
var customDrumRoute = express.Router();
var ObjectId = mongodb.ObjectID;
customDrumRoute.get('/', function (req, res) {
    customDrum_1.default.find().populate('instrument').then(function (customdrum) {
        res.send(customdrum);
    }).catch(function () {
        res.status(500);
    });
});
customDrumRoute.get('/:id', function (req, res) {
    customDrum_1.default.findById(req.params['id']).then(function (customdrum) {
        res.send(customdrum);
    }).catch(function (err) {
        res.status(500).send({ err: err });
    });
});
customDrumRoute.post('/instrument/:drId', authorize, function (req, res) {
    var instId = new ObjectId(req.body._id);
    var drId = new ObjectId(req.params['drId']);
    customDrum_1.default.update({ _id: drId }, { $push: { instrument: instId } })
        .then(function (brand) {
        res.send(brand);
        console.log('Added successfully');
    }).catch(function (err) {
        res.status(400).send(err);
    });
});
customDrumRoute.delete('/:id', function (req, res) {
    customDrum_1.default.findByIdAndRemove(req.params['id']).then(function () {
        res.sendStatus(200);
    }).catch(function () {
        res.sendStatus(400);
    });
});
function authorize(req, res, next) {
    var token = req['token'];
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
exports.default = customDrumRoute;
