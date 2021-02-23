import express from 'express'
import dbConfig  from './database/dbConfig.js'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './routes.js'

dbConfig.dbDisconnect()
dbConfig.dbConnect()

const app = express()

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'TODO App API',
            version: '1.0.0'
        }

    },
    servers: [{'url': 'http://localhost:3000'}],
    apis: ['./routes.js']

};

const swaggerDocs = swaggerJsdoc(swaggerOptions)
app.use('/api_docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use(routes)

app.listen(3000, () => {
    console.log('listening on port 3000 ...');
})

export default app