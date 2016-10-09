import * as mongoose from 'mongoose';
import * as Review from './review';
import * as Rating from './rating';


interface IInstrument extends mongoose.Document{
    instrument: string;
    brand: string;
    make: string,
    fullDescription: string;
    imgUrl: string;
    price: number;
    rating: Rating.IRating[];
    review: Review.IReview[];
}

let instrumentSchema = new mongoose.Schema ({
    instrument: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    make: {
        type: String,
        required: true,
    },
    fullDescription: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rating'
    }],
    reviews: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
})

export default mongoose.model<IInstrument>('Instrument', instrumentSchema)
