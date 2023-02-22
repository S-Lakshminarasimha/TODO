const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.get('/',userController.Signup)

router.post('/createAccount',userController.createAccount)

module.exports = router