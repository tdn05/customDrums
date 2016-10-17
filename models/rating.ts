import * as mongoose from 'mongoose';
import * as User from './user';

export interface IRating extends mongoose.Document {
    rating: number,
    user: User.IUser,
}

let ratingSchema = new mongoose.Schema ({
    rating: {
        type: Number,
        required: true,
    },
    user: {
        type: String,
        required: false,
    }
});

export default mongoose.model<IRating>('Rating', ratingSchema);
