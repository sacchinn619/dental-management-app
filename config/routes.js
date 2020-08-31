const express = require('express')
const router = express.Router() 
const usersController = require('../app/controllers/usersController')
const appointmentsController= require('../app/controllers/appointmentsController')
const productsController= require ('../app/controllers/productsController')
const authenticateUser = require('../app/middlewares/authentication')
const reviewsController= require('../app/controllers/reviewsController')

router.post('/api/users/register', usersController.register)
router.post('/api/users/login', usersController.login)
router.get('/api/users/account',authenticateUser,usersController.account)
router.post('/api/users/appointment',appointmentsController.post)
router.put('/api/users/appointment/:id',appointmentsController.update)
router.get('/api/users/appointments',authenticateUser,appointmentsController.get)
router.post('/api/products/info', productsController.info)
router.get('/api/products/:id', productsController.product)
router.post('/api/reviews',reviewsController.post)
router.get('/api/reviews',reviewsController.get)


module.exports = router
