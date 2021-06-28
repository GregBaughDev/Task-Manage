const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/taskManage', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connection open')
    })
    .catch(err => {
        console.log("Oh no error")
        console.log(err);
    })

const taskSchema = new mongoose.Schema({
    
})