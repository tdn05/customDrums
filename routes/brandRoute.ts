import * as mongoose from 'mongoose';
import * as express from 'express';
import Brand from '../models/brand';

let brandRoute = express.Router();

brandRoute.get('/', (req,res)=>{
    Brand.find().then((brands)=>{
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

//add review to brand
