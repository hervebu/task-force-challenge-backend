import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const dbConnect = () => {
    let db_url;
        if (process.env.NODE_ENV === 'test') {
            db_url = process.env.test_db_URI
        } else {
            db_url = process.env.dev_db_URI      
        }
     mongoose.connect(db_url,
                { 
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                 }
            ).then(
                console.log('Connected')
            ).catch(
                err => console.log(err)
            );   
}    

const dbDisconnect = () => {
    mongoose.disconnect();
}
const dbDrop = () => {
    mongoose.connection.db.dropDatabase()
    
}
export default { dbConnect, dbDisconnect, dbDrop }