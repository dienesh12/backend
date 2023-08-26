const express = require("express")
const app = express()
require("dotenv").config()
const CORS = require("cors")
const connectDB = require("./Config/db")

connectDB()
const PORT  = process.env.PORT

app.use(CORS())
app.use(express.json())

app.use("/", require("./Routes/contentRoute"))

app.listen((PORT), () => console.log(`Server Running on PORT ${PORT}`))