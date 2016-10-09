import * as mongoose from 'mongoose';

export interface IRating extends mongoose.Document {
    rating: number,
    userId: string,
}

let ratingSchema = new mongoose.Schema ({
    rating: {
        type: Number,
        required: true,
    },
    userId: {
        type: String,
        required: false,
    }
});

export default mongoose.model<IRating>('Rating', ratingSchema);
