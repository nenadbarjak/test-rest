const express = require('express')
const router = new express.Router()

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

module.exports = router
