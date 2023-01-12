const express = require('express')
const bodyParser = require('body-parser')
require('./models/config')


const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userRoutes = require('./routes/userRoutes')


app.use(userRoutes)






app.listen(8000,()=>{
    console.log("Server is running on port 8000")
})


