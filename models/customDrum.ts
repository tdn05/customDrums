import * as mongoose from 'mongoose';
import * as Instrument from './instrument';
import * as User from './user';

export interface ICustomDrum extends mongoose.Document {
    userId: string,
    username: string,
    imgUrl: string,
    instrument: Instrument.IInstrument[];
}

let customDrumSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    imgUrl: {
        type: String,
        required: false
    },
    instrument:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Instrument"
    }]
})

export default mongoose.model<ICustomDrum>('CustomDrum', customDrumSchema);
