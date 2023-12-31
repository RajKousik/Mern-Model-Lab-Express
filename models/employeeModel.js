const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    profession : {
        type : String,
        required : true
    },
    age : {
        type : String,
        required : true
    },
})

module.exports = mongoose.model('employeeModel', employeeSchema);
