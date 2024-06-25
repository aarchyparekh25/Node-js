const mongoose = require ("mongoose")

const User = require("./Users")
const Product = require("./Product")

const orderScheme = new mongoose.Schema({
    _id : Number,
    customer_details :{type:Number,ref:User},
    order_date : Date,
    product_details: {type:Number,ref:Product},
    quantity : Number,
    total_amount : Number,
    order_status : String
    
})

const Order = mongoose.model("Order",orderScheme)
module.exports = Order