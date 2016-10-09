import * as mongoose from 'mongoose';
import User from './models/user';

const URL = 'mongodb://admin:Secret123!@ds035776.mlab.com:35776/coolkidsdata';

class Database {
    public static connect(){
        mongoose.connect(URL);
        let db = mongoose.connection;

        db.on('error', console.error.bind(console, 'ConnectionError'));
        db.once('open', console.log.bind(console, 'Connection Success'));
    }
}

export default Database;
