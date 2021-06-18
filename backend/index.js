const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dbSchema = require('./models/schema');

mongoose.connect('mongodb://localhost:27017/taskManage', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("TASK MANAGE: Mongo Connection Open")
    })
    .catch(err => {
        console.log("TASK MANAGE: Mongo Connection error")
        console.log(err);
    });