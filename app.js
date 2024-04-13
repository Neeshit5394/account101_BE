const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mySqlPool = require('./config/db');

//configure dotenv
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"))
app.use(express.json())

//routes
app.use("/api/v1/bankaccount", require("./routes/bankRoutes"));
app.use("/api/v1/customer", require("./routes/customerRoutes"));
app.use("/api/v1/vendor", require("./routes/vendorRoutes"));

app.get('/test', (req,res) =>
    res.status(200).send('<h1>Welcome</h1>')
);

//port
const PORT = process.env.PORT || 8000;

//conditionally listen
mySqlPool
    .query('SELECT 1')
    .then(() => {
        console.log('MySQL DB Connected'.bgCyan.white);
        //listen
        app.listen(PORT, () => {
            console.log(`Server Running on port ${process.env.PORT}`.bgMagenta.white);
        }); 
    })
    .catch((error) => {
        console.log(error);
});