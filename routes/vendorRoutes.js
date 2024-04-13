const express = require('express')
const { getAllVendors } = require('../controllers/vendorController')


//router object
const router = express.Router()

//routes

//GET ALL vendors || GET
router.get('/getall', getAllVendors);

module.exports = router