const mongoose=require('mongoose');
const detail=new mongoose.Schema(
    {
        name:{
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        phone: {
            type: Number,
            require: true
        },
        venue: {
            type: String,
            required: true
        },
        dates:{
           type:Date,
           required:true
        },
        decoration:{
            type:String,
            required:true
         },
         no_of_attendees:{
            type:Number,
            required:true
         },
         food:{
             type:String,
             required:true
         },
         type_of_ocassion:{
             type:String,
             required:true
         },
         others:{
             type:String,
             required:true
         }
    }
);

module.exports = mongoose.model('order',detail);