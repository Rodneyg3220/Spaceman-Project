const express = require('express')
const router = express.Router()
const nutritionCtrl = require('../controller/nutrition')


//Define the route here
router.post('/meals/:id/nutrition', nutritionCtrl.create)

module.exports = router