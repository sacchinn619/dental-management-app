const mongoose =require('mongoose')

const Schema=mongoose.Schema
const reviewsSchema= new Schema({
    name:{
        type:String
    },
    reviews:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})
//create a Model
 const Reviews= mongoose.model('Reviews',reviewsSchema)

 module.exports = Reviews
