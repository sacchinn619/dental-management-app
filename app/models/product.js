const mongoose =require('mongoose')

const Schema = mongoose.Schema
const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    price: {
        type: String
    },
    description: {
        type: String,
        
    }
    
})

// create a model
const Product = mongoose.model('Product', productSchema)

module.exports = Product
