const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    iban: {
        type: String, 
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    category:{
        type: String,
        required: true
    },

    date:{
        type: Date,
        default: Date.now
    }

})

const Product = mongoose.model("Product",productSchema)

module.exports = Product;