import * as mongoose from 'mongoose';
import * as Review from './review';
import * as Rating from './rating';

export interface IInstrument extends mongoose.Document {
    instrument: string;
    brand: string;
    make: string;
    fullDescription: string;
    imgUrl: string;
    price:string;
    sampleVid:string;
    reviews: Review.IReview[];
    rating: Rating.IRating[];
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
    sampleVid: {
        type: String,
        required: true,
    },
    reviews:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    rating: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rating'
    },
});

export default mongoose.model<IInstrument>('Instrument', instrumentSchema);
