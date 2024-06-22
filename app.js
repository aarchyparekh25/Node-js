const express = require("express")

const mongoose = require ("mongoose")

const user = require("./routers/userroute.js")

const product = require("./routers/productroute.js")

const order = require("./routers/orderroute.js")


mongoose.connect("mongodb://localhost:27017/sampleproject")

const PORT = 8000

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const app = express()

app.use(express.json())
app.use(user)
app.use(product)
app.use(order)

app.listen(PORT,() => 
    {
        console.log(`Server is running on port:${PORT}`)
    }


)