const Order = require("../modules/Order")

const order = (req,res) => {
    res.send("Your order will be plaved soon,thankyou for your patience!")  
 }

 const addOrder = async (req,res) =>{
    const order = new Order(req.body)
    await order.save()
    res.send(order)
 }

 const updateOrder = async(req,res) => {

    const params = req.params.id
    const order = await Order.findByIdAndUpdate(req.params.id,req.body)
 
    if(!order){
        res.send("No order present,update not available")
    }
    res.json({ message: "Order updated!!!",  order })
 }
 
 const deleteOrder = async(req,res) => {
    const params = req.params.id
    const order = await Order.findByIdAndDelete(req.params.id)
    if(!order){
        res.send("No order present,delete not available")
    }
    res.json({message:"The order has been deleted successfully!!!", order})
 }

module.exports = {order,addOrder,updateOrder,deleteOrder}