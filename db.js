
const mongoose = require('mongoose');
const express = require('express');
const app =express();
const DB='mongodb+srv://komal:7218055734@cluster0.2plqcoi.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(DB).then(()=>{
    console.log('connection successful');
}).catch((err)=>console.log(' No connection '));

mongodb+srv://<username>:<password>@cluster0.2plqcoi.mongodb.net/?retryWrites=true&w=majority