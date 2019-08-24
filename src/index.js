const express = require('express')
const app = express()
const port = 3000
const { rotateRoute } = require('./routes/rotate')
const { handleErrors } = require('./utils')
const bodyParser = require('body-parser')

// parse various different custom JSON types as JSON
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/rotate-image', handleErrors(rotateRoute))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
