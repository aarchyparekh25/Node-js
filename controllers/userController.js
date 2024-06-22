const User = require("../modules/Users")
const user = (req,res) => {
   res.send("Hello from user")  
}

const createUser = async(req,res) => {
    const user = new User(req.body)
    await user.save()
    res.send(user)
}

const updateUser = async(req,res) => {

    const params = req.params.id
    const user = await User.findByIdAndUpdate(req.params.id,req.body)

    if(!user){
        res.send("No user present,update not available")
    }
    res.json({ message: "User Updated!!!",  user })
}

const deleteUser = async(req,res) => {
    const user = await User.findByIdAndDelete(req.params.id)
    if(!user){
        res.send("No user present,delete not available")
    }
    res.send(user).json("The delete has been successful!!!")
}

module.exports = {user,createUser,updateUser,deleteUser}