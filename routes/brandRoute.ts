import * as mongoose from 'mongoose';
import * as express from 'express';
import * as mongodb from 'mongodb';
import Brand from '../models/brand';
import Instrument from '../models/instrument';

let brandRoute = express.Router();
let ObjectId = mongodb.ObjectID;

brandRoute.get('/', (req,res)=>{
    Brand.find().populate('instrument').then((brands)=>{
        res.send(brands)
    }).catch((err)=>{
        res.sendStatus(err)
    })
});

brandRoute.get('/:id', (req,res)=>{
    Brand.findById(req.params['id']).then((brand)=>{
        res.send(brand);
    }).catch((err)=>{
        res.send(err)
    })
});

brandRoute.post('/', (req,res)=>{
    let brand = new Brand();

    brand.brand = req.body.brand;
    brand.imgUrl = req.body.imgUrl;
    brand.instrument = req.body.instrument;
    brand.description = req.body.description;
    brand.reviews = req.body.reviews;
    brand.rating = req.body.rating;

    brand.save().then((brand)=>{
        res.status(201).send(brand)
    }).catch((err)=>{
        res.status(400).send(err)
    })
});

//add instrument to brand
brandRoute.post('/instrument/:brandId', (req,res)=>{
    let instId = new ObjectId(req.body._id);
    let brandId = new ObjectId(req.params['brandId']);

    Brand.update({_id: brandId}, {$push: {instrument: instId}}).then((brand)=>{
        res.send(brand);
        console.log('instrument added successfully');
    }).catch((err)=>{
        res.status(400).send(err);
    })
});

export default brandRoute;
