const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController.js')

router.get('/login' , mainController.login)



module.exports = router