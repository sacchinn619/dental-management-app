const User = require('../models/user')
const Appointment=require('../models/appointment')
const usersController = {}
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


usersController.register = (req, res) => {
    const body = req.body 
    const user = new User(body)
    user.save()
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.json(err)
        })
}

usersController.login = (req, res) => {
    const body = req.body 
    // check if email is present 
    User.findOne({ email: body.email })// finds and returns the entire user obj that matches the email provided.
        .then((user) => {
            if(user) {
                bcryptjs.compare(body.password, user.password)// compares and returns true or false.
                    .then((result) => {
                        if(result) {
                            const tokenData = {
                                id: user._id
                            }
                            const token = jwt.sign(tokenData, 'dct@123', { expiresIn: '2d'})
                            res.json({
                                token: token
                            })
                        } else {
                            res.json({ errors: 'invalid email / password' })
                        }
                    })
            } else {
                res.json({ errors: 'invalid email / password'})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}
usersController.account=(req,res)=>{
    User.findById(req.userId)
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        res.json(err)
    })
}



module.exports = usersController