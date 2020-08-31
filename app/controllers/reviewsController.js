const Reviews =require('../models/reviews')

const reviewsController={}

reviewsController.post=(req,res)=>{
   const body=req.body
   const reviews= new Reviews(body)
   reviews.save()
   .then((review)=>{
     res.json(review)
   })
   .catch((err)=>{
       res.json(err)
   })

}
reviewsController.get=(req,res)=>{
Reviews.find({})
.then((reviews)=>{
    res.json(reviews)
})
.catch((err)=>{
    res.json(err)
})

}
module.exports=reviewsController
