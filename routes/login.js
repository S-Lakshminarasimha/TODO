const express = require('express')
const router = express.Router()

const passport = require('passport')

const userController = require('../controllers/userController')

router.get('/',userController.Login)

router.post('/createSession',passport.authenticate(
    'local',
    {failureRedirect:'/login'}
),userController.createSession)

router.use('/profile',require('./profile'))

module.exports = router