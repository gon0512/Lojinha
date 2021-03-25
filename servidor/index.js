const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const routes = require('./src/routes/routes.js')
const cors = require('cors')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

routes(app)

app.listen(port)

console.log(`Server listening at localhost:${port}`)