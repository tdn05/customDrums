import * as mongoose from 'mongoose';
import User from './user';
import * as Instrument from './instrument'

interface ICustomDrum extends mongoose.Document {
    user: User.IUser[];
    instrument: Instrument.IInstrument[];
}
