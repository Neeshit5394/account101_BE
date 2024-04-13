const db = require("../config/db")

//Get all customers
const getAllCustomers = async (req,res) => {
    try{
        const data = await db.query('SELECT * FROM customer');
        if(!data){
            return res.status(404).send({
                success:false,
                message: 'No Records Found'
            })
        }
        res.status(200).send({
            success:true,
            message:'All customer records',
            totalAccounts: data[0].length,
            data: data[0]
        })
    }catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Get All customers',
            error
        })
    }
}

module.exports = { getAllCustomers };