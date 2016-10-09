import * as express from 'express';
import * as mongodb from 'mongodb';
import Review from '../models/review';
import Rating from '../models/rating';
import Drum from '../models/drum';

let ObjectId = mongodb.ObjectID;

let drumRoute = express.Router();

//create a drum
drumRoute.post('/', (req,res)=>{
    let drum = new Drum();

    drum.drumBrand  = req.body.drumBrand;
    drum.make  = req.body.make;
    drum.description  = req.body.description;
    drum.imgUrl  = req.body.imgUrl;
    drum.drumPrice  = req.body.drumPrice;
    drum.reviews  = req.body.reviews;
    drum.rating  = req.body.rating;

    drum.save().then((drum)=>{
        res.status(201).send(drum)
    }).catch((err)=>{
        res.status(400).send(err)
    })
});

//read drum
drumRoute.get('/', (req,res)=>{
    Drum.find().then((drums)=>{
        res.send(drums);
    }).catch((err)=>{
        res.status(500).send({err: err})
    })
})

drumRoute.get('/:id', (req,res)=>{
    Drum.findById(req.params['id'])
    .then((drums)=>{
    }).catch((err)=>{
        res.status(500).send({err: err});
    })
});

//add review to Drum
drumRoute.post('/review/:drumId', (req,res)=>{
    let drumId = new ObjectId(req.params['drumId']);
    let review = new Review();

    review.userId = req.body.userId;
    review.message = req.body.message;
    review.timeCreate = new Date();
    review.votes = req.body.votes;

    review.save()
    .then((review)=>{
        let revId = new ObjectId(review._id);
        Drum.update({_id:drumId}, {$push: {reviews: revId}})
        .then(()=>{
            res.sendStatus(201);
        }).catch(()=>{
            res.sendStatus(404);
        })
    }).catch(()=>{
        res.sendStatus(400);
    });
});

export default drumRoute;
