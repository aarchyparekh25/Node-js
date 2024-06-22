const express = require("express")

const {product, addProduct,updateProduct,deleteProduct} = require("../controllers/productController")

const router = express.Router()

router.get("/products",product)

router.post("/addProducts",addProduct)

router.put("/updateProduct/:id",updateProduct)

router.delete("/deleteProduct/:id",deleteProduct)

module.exports = router