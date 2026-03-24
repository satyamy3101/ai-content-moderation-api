const mongoose = require("mongoose")

const moderationSchema = new mongoose.Schema({

    text: {
        type: String,
        required: true
    },

    label: {
        type: String
    },

    score: {
        type: Number
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Moderation", moderationSchema)