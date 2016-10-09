import * as express from 'express';
import Instrument from '../models/instrument';

let instrumentRoute = express.Router();

//create instrumentRoute
instrumentRoute.post('/', (req,res)=>{
    let instrument = new Instrument();

    instrument.instrument  = req.body.instrument;
    instrument.brand  = req.body.brand;
    instrument.make  = req.body.make;
    instrument.imgUrl  = req.body.imgUrl;
    instrument.fullDescription  = req.body.fullDescription;
    instrument.price  = req.body.price;
    instrument.rating = req.body.rating;
    instrument.review = req.body.review;

    instrument.save().then((instrument)=>{
        res.status(201).send(instrument)
    }).catch((err)=>{
        res.status(400).send(err)
    })
});

//read drums
instrumentRoute.get('/', (req,res)=>{
    Instrument.find().then((instruments)=>{
        res.send(instruments);
    }).catch((err)=>{
        res.send(err);
    })
})

//read individual drum
instrumentRoute.get('/:id', (req,res)=>{
    Instrument.findById(req.params['id'])
    .then((instrument)=>{
        res.send(instrument)
    }).catch((err)=>{
        res.status(500).send({err:err});
    })
});

export default instrumentRoute;
