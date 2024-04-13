const express = require('express')
const { getAllCustomers } = require('../controllers/customerController')

//router object
const router = express.Router()

//routes

//GET ALL customers || GET
router.get('/getall', getAllCustomers);

module.exports = router