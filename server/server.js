require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/login',require('./route/loginroute'));
app.use('/table',require('./route/tableRoute'));
app.listen (8080,()=>{
    console.log('Server is running on 8000 port: ');
})