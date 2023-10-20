const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController.js')

router.get('/' , mainController.index)
router.get('/alquiler' , mainController.alquileres)
router.get('/ventas' , mainController.ventas)
router.get('/terrenos' , mainController.terrenos)



module.exports = router