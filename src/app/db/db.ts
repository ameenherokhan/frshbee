    import * as mongoose from 'mongoose';

    export class MongoConnect {
        static connect() {//creae env file before this
            const mongoDBConn = process.env.MONGODB_URL || '';
            return mongoose.connect(mongoDBConn,{ useNewUrlParser: true ,useUnifiedTopology: true, 
            useCreateIndex: true,useFindAndModify: false});
        }
    }