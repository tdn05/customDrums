import * as express from 'express';
import Instrument from '../models/instrument';
import * as mongodb from 'mongodb';
import CustomDrum from '../models/customDrum';
import * as jwt from 'jsonwebtoken';

let customDrumRoute = express.Router();
let ObjectId = mongodb.ObjectID;

//read
customDrumRoute.get('/' , (req,res)=>{
    CustomDrum.find().populate('instrument').then((customdrum)=>{
        res.send(customdrum)
    }).catch(()=>{
        res.status(500)
    })
});

customDrumRoute.get('/:id', (req,res)=>{
    CustomDrum.findById(req.params['id']).then((customdrum)=>{
        res.send(customdrum);
    }).catch((err)=>{
        res.status(500).send({err:err})
    })
});

//add useId to customDrum
// customDrumRoute.post('/:id', authorize, (req,res)=>{
//     CustomDrum.find().then(()=>{
//         let customDrum = new CustomDrum();
//
//         customDrum.userId = req.user.id;
//
//         customDrum.save().then((customDrum)=>{
//             res.send(customDrum)
//         }).catch((err)=>{
//             res.status(500).send({err})
//         })
//     })
// })

//add instrument to customDrum
customDrumRoute.post('/instrument/:drId', authorize, (req,res)=>{
    let instId = new ObjectId(req.body._id);
    let drId = new ObjectId(req.params['drId']);

    CustomDrum.update({_id: drId}, {$push: {instrument: instId}})
    .then((brand)=>{
        res.send(brand);
        console.log('Added successfully')
    }).catch((err)=>{
        res.status(400).send(err)
    })
});

//delete
customDrumRoute.delete('/:id', (req,res)=>{
    CustomDrum.findByIdAndRemove(req.params['id']).then(()=>{
        res.sendStatus(200)
    }).catch(()=>{
        res.sendStatus(400)
    })
})

function authorize(req, res, next){
    let token = req['token'];

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


//

export default customDrumRoute;
