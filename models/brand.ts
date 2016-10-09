import * as mongoose from 'mongoose';
import * as Review from './review';
import * as Rating from './rating';
import * as Instrument from './instrument';

interface IBrand extends mongoose.Document{
    brand: string;
    instrument: Instrument.IInstrument[];
    imgUrl: string;
    description: string;
    reviews: Review.IReview[];
    rating: Rating.IRating[];
}

let brandSchema = new mongoose.Schema ({
    brand: {
        type: String,
        required: true,
    },
    instrument:[{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Instrument'
    }],
    imgUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },

})

export default mongoose.model<IBrand>('Brand', brandSchema)
