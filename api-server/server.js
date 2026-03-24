const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const moderationRoutes = require("./routes/moderationRoutes")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.log(err))

// Test route
app.get("/", (req, res) => {
    res.json({ message: "Content Moderation API running" })
})
console.log("URI:", process.env.MONGO_URI)
// Routes
app.use("/api/moderation", moderationRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})