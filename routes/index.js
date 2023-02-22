const express = require('express')
const router = express.Router()

router.use('/',require('./home'))
router.use('/signup',require('./signup'))
router.use('/login',require('./login'))
router.use('/logout',require('./logout'))
router.use('/profile',require('./profile'))

module.exports = router