const db = require("../config/db");

//GET ALL BANK ACCOUNTS
const getBankAccounts = async (req,res) => {
    try {
        const data = await db.query('SELECT * FROM account')
        if(!data){
            return res.status(404).send({
                success:false,
                message: 'No Records Found'
            })
        }
        res.status(200).send({
            success:true,
            message:'All bank accounts records',
            totalAccounts: data[0].length,
            data: data[0]
        })
    }catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Get All Bank Accounts',
            error
        });
    }
};

//GET BANK ACCOUNT by ACCOUNT NUMBER
const getBankAccountByAccNo = async (req,res) => {
    try{
        const AccountNumber = req.params.id
        if(!AccountNumber){
            return res.status(404).send({
                success:false,
                message:'Invalid or provid account number'
            })
        }
        const data = await db.query(`SELECT * FROM account WHERE account_number=?`,[AccountNumber])
        if(!data){
            return res.status(404).send({
                success:false,
                message:"No records found"
            });
        };
        res.status(200).send({
            success:true,
            accountDetails: data[0],
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in get account by account Number',
            error
        });
    }
};

module.exports = { getBankAccounts, getBankAccountByAccNo };