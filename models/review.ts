import * as mongoose from 'mongoose';
import User from './user';


export interface IReview extends mongoose.Document {
    userId: string,
    username: string,
    message: string,
    timeCreate: Date,
    rating: number,
}

let reviewSchema = new mongoose.Schema ({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    username: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    timeCreate: {
        type: Date,
        required: true,
    },
    rating: {
        type: Number,
        required: false,
    }
});

export default mongoose.model<IReview>('Review', reviewSchema);
