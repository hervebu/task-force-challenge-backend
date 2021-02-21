import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const dbConnect = 
    mongoose.connect(
        process.env.db_URI,
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true
         }
    ).then(
        console.log('Connected')
    ).catch(
        err => console.log(err)
    );

export default { dbConnect }