const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const { route__User } = require('./routes/user_route')

const port = 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use('/api/user', route__User)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))