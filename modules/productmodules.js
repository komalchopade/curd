//Create a model for data in database
const mongoose = require('mongoose');
const productSchema = mongoose.Schema(
    {
        name :{
            type : String,
            required: [true,,"Please enter a product name"]
        },
        quantity:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true,
        },
        image:{
            type:String,
            required:false
        }
    },
    {
        timestampl:true
    }
)


const product=mongoose.model('product',productSchema);
module.exports=product;