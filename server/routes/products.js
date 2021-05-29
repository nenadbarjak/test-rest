const express = require('express')
const router = new express.Router()

const upload = require('../middleware/multer')
const Product = require('../models/product')

// Add a new product to DB
router.post('/products', async (req, res) => {
    const product = new Product({
        ...req.body
    })

    try {
        await product.save()
        res.status(201).send(product)
    } catch (err) {
        res.status(400).send()
    }
})

// Get all products from DB
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({})
        res.send(products)
    } catch (err) {
        res.status(500).send()
    }
})

//Upload an image
router.post('/upload', upload.single('test'), async (req, res) => {
    try {
        const product = await Product.findOne({_id: req.body.id})

        // Čuvamo samo filename u polju image u product-u, a folder uploads 
        // je serviran kao static u index.js
        product.image = req.file.filename

        await product.save()

        res.send(product)
    } catch (err) {
        res.status(500).send()
    }
    
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

module.exports = router
