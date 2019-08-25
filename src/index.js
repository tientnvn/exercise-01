const express = require('express')
const app = express()
const port = 3000
const { rotateRoute } = require('./routes/rotate')
const { hotelRoute } = require('./routes/hotel')
const { handleErrors } = require('./utils')
const bodyParser = require('body-parser')
const cors = require('cors')

// parse various different custom JSON types as JSON
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors({
  origin: '*'
}))

app.post('/rotate-image', handleErrors(rotateRoute))
app.post('/hotel-reservation', handleErrors(hotelRoute))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
