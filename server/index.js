const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

require('./db/mongoose')

const app = express()
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
