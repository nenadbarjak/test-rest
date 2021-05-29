const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const productsRouter = require('./routes/products')

dotenv.config()

require('./db/mongoose')

const app = express()
const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'uploads')))
app.use(express.static(path.join(__dirname, '../client')))
app.use(cors())
app.use(express.json())
app.use(productsRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
