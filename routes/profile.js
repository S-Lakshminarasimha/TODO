const express = require('express')
const router = express.Router()
const passport = require('passport')
const userController = require('../controllers/userController')
const profileController = require('../controllers/profileController')
router.get('/',passport.checkAuthentication,userController.profile)

router.post('/createTask',profileController.createTask)
router.get('/deleteTask/:task_id',profileController.deleteTask)
module.exports = router