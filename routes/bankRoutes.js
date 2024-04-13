const express = require('express')
const { getBankAccounts, getBankAccountByAccNo } = require('../controllers/bankController')

//router object
const router = express.Router()

//routes

//GET ALL Bank Accounts || GET
router.get('/getall', getBankAccounts);

//GET BANK Account BY Account Number
router.get('/get/:id', getBankAccountByAccNo);

module.exports = router