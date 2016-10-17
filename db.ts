import * as mongoose from 'mongoose';
import User from './models/user';
import CustomDrum from './models/customDrum';

const URL = 'mongodb://admin:Secret123!@ds035776.mlab.com:35776/coolkidsdata';

class Database {
    public static connect(){
        mongoose.connect(URL);
        let db = mongoose.connection;

        db.on('error', console.error.bind(console, 'ConnectionError'));
        db.once('open', console.log.bind(console, 'Connected to PORT 3000'));

        CustomDrum.find('customDrums').then((customDrum)=>{
            if(customDrum.length==0) {
                CustomDrum.create(
                    {user: 'unknown'}
                ).then(()=>{
                    console.log('Unknown user created')
                })
            } else {
                console.log('already in database')
            }
        })
        .catch((err)=>{
            console.log('error');
        })

        User
        .findOne({email: 'tduynguyen05@gmail.com'})
        .then((user)=>{
            if(!user) {
                let adminUser = new User();
                adminUser.username = 'tduynguyen05@gmail.com'
                adminUser.email ='tduynguyen05@gmail.com'
                adminUser.setPassword('Secret123!');
                adminUser.admin = true;
                adminUser
                    .save()
                    .then(()=>{
                        console.log('Admin successfully created');
                    })
                    .catch(()=>{
                        console.log('Admin creation went wrong')
                    })
            } else {
                console.log('Admin already exists in Database')
            }
        })
        .catch((err)=>{
            console.log(err)
        });
    }
}

export default Database;
