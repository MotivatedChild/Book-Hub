const express = require('express')
const router = express.Router();
const Product = require('../models/product')


router.post('/addproduct',async(req,res) =>{
    try {
        const product = new Product({
            name: req.body.name,
            iban: req.body.iban,
            price: req.body.price,
            category: req.body.category
        })

        const savedProduct = await product.save();
        res.json(savedProduct)

    } catch(error){
        res.status(400).json({message: error.message})
    }
})
// Retrieve all products
router.get('/readallproduct', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });
  
  // Update a product by ID
  router.put('/update/:id', async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Delete a product by ID
  router.delete('/delete/:id', async (req, res) => {
    try {
      const removeProduct = await  Product.findByIdAndDelete(req.params.id);
      res.json(removeProduct);

    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  module.exports = router;
  
