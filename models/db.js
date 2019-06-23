const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mybrary',
{useNewUrlParser:true},(err) =>{
    if(!err) {
        console.log("MongoDB connection successful.")
    } else  {
        console.log("Error in DB connection : "+ err)
    }
});
