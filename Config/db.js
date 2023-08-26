const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI)
        console.log(`Database Connected ${(await conn).connection.host}`)
    } catch(err) {
        console.log(`Database Connection Failed!`)
    }
}

module.exports = connectDB