const mongoose = require('mongoose')
const {model , Schema}  = mongoose;

const StudentSchema = new mongoose.Schema({
    name:{
        type: String
    },
    gender:{
        type:String
    },
    dob:{
        type:Date, 
        required:true
    },
    email:{
        type: String, 
        unique : true,
        required:true
    },
    phone:{
        type: Number,
        required:true
    },
    address:{
        type:String,
    },
    course:{
        type:String
    }
})
const StudentModel = model('detail', StudentSchema);

module.exports = {
    StudentModel,
}

