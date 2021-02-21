import express from 'express'
import { dbConnect } from './database/dbConfig'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from '../src/routes'

dbConnect
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use(routes)

app.listen(3000, () => {
    console.log('listening on port 3000 ...');
})

export default app