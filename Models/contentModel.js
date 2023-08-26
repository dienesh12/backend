const mongoose = require("mongoose")

const contentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
    },
    video: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("content", contentSchema)