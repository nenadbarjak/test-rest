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

module.exports = router
