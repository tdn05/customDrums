import * as mongoose from 'mongoose';

export interface IReview extends mongoose.Document {
    userId: string,
    message: string,
    timeCreate: Date,
    votes: number,
}

let reviewSchema = new mongoose.Schema ({
    userId: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    timeCreate: {
        type: Date,
        required: true
    },
    votes: {
        type: Number,
        required: true
    }
})

export default mongoose.model<IReview>('Review', reviewSchema);
