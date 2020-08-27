const Product=require('../models/product')
const productsController = {}


productsController.info = (req, res) => {
    const body = req.body 
    const product = new Product(body)
    product.save()
        .then((product) => {
            res.json(product)
        })
        .catch((err) => {
            res.json(err)
        })
}
productsController.product=(req,res)=>{
Product.findById(req.params.id)
.then((product)=>{
    res.json(product)
})
.catch((err)=>{
    res.json(err)
})
}
module.exports = productsController