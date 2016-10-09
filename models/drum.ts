import * as mongoose from 'mongoose';
import * as Review from './review';
import * as Rating from './rating';

export interface IDrum extends mongoose.Document {
    drumBrand: string;
    make: string;
    description: string;
    imgUrl: string;
    drumPrice: number;
    reviews: Review.IReview[];
    rating: Rating.IRating[];
}

let drumSchema = new mongoose.Schema ({
    drumBrand: {
        type: String,
        required: true,
    },
    make: {

        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true
    },
    drumPrice: {
        type: Number,
        required: true
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    rating: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rating'
    }]
})

export default mongoose.model<IDrum>('Drum', drumSchema);
