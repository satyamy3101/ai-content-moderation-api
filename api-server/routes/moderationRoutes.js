const express = require("express")
const router = express.Router()
const axios = require("axios")

const Moderation = require("../models/moderationModel")

router.post("/check", async (req, res) => {

    const { text } = req.body

    try {

        console.log("Sending request to AI service...")

        const response = await axios.post(
            "http://127.0.0.1:8000/predict",
            { text }
        )

        console.log("AI RESPONSE:", response.data)

        const result = response.data.result[0]

        const savedModeration = await Moderation.create({
            text: text,
            label: result.label,
            score: result.score
        })

        res.json({
            message: "Moderation checked successfully",
            data: savedModeration
        })

    } catch (error) {

        console.log("ERROR:", error.message)

        res.status(500).json({
            message: "Error connecting to AI service"
        })

    }

})

module.exports = router