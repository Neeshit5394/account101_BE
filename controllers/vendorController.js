const mySqlPool = require("../config/db")

//GET ALL VENDORS
const getAllVendors = async (req,res) => {
    try{
        const data = await mySqlPool.query('SELECT * FROM vendor');
        if(!data){
            return res.status(404).send({
                success:false,
                message: 'No Records Found'
            })
        }
        res.status(200).send({
            success:true,
            message:'All vendor records',
            totalAccounts: data[0].length,
            data: data[0]
        })
    }catch(error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Get All vendors',
            error
        })
    }
}

module.exports = { getAllVendors };