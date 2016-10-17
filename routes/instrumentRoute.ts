import * as express from 'express';
import Instrument from '../models/instrument';
import Review from '../models/review';
import * as mongodb from 'mongodb';
import * as jwt from 'jsonwebtoken';

let instrumentRoute = express.Router();
let ObjectId = mongodb.ObjectID;

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
    instrument.reviews = req.body.reviews;
    instrument.sampleVid = req.body.sampleVid;

    instrument.save().then((instrument)=>{
        res.status(201).send(instrument)
    }).catch((err)=>{
        res.status(400).send(err)
    })
});

//read drums
instrumentRoute.get('/', (req,res)=>{
    Instrument.find().populate('reviews').then((instruments)=>{
        res.send(instruments)
    }).catch((err)=>{
        res.send(err);
    })
})

//read individual drum
instrumentRoute.get('/:id', (req,res)=>{
    Instrument.findById(req.params['id']).populate('reviews')
    .then((instrument)=>{
        res.send(instrument)
    }).catch((err)=>{
        res.status(500).send({err:err});
    })
});

//add Review to instrument
instrumentRoute.post('/reviews/:instId', authorize, (req,res)=>{
        // let userId = new ObjectId(req.user.id);
        let instId = new ObjectId(req.params['instId']);
        console.log(instId);
        let review = new Review();

        

        review.message = req.body.message;
        review.timeCreate = new Date();
        review.rating = 0;
        review.userId = req.user.id;
        review.username = req.user.username;

        review.save()
        .then((review)=>{
            let revId = new ObjectId(review._id);
            Instrument.update({_id: instId}, { $push: {reviews: revId}})
            .then(()=>{
                res.sendStatus(201);
            }).catch(()=>{
                res.sendStatus(404);
            });
        }).catch(()=>{
            res.sendStatus(400);
        })
});

instrumentRoute.put('/', (req,res)=>{
    Instrument.findByIdAndUpdate(req.body._id, req.body).then((instrument)=>{
        res.send(instrument)
    }).catch((err)=>{
        res.status(404).send(err);
    })
})

function authorize(req, res, next){

    let token = req['token'];
    console.log(token);

    jwt.verify(token, 'SuperSecret', function(err,decoded){
        if(err){
            res.sendStatus(401)
        } else {
            req.user = decoded;
            console.log(decoded);
            next();
        }
    })
}

export default instrumentRoute;
