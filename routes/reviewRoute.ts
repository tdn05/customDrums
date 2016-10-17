import * as express from 'express';
import Review from '../models/review'


let reviewRoute = express.Router();

//delete review
reviewRoute.delete('/:id', (req,res)=>{
    Review.findByIdAndRemove(req.params['id']).then(()=>{
        res.sendStatus(200)
    }).catch(()=>{
        res.sendStatus(400);
    })
});

export default reviewRoute;
