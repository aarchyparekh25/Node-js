const express = require("express")

const {user,createUser,updateUser,deleteUser} = require("../controllers/userController")

const router = express.Router()

router.get("/user",user)

router.post("/createUser",createUser)

router.put("/updateUser/:id",updateUser)

router.delete("/deleteUser/:id",deleteUser)

module.exports = router