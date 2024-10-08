const express = require("express")
const path = require("path")
const app = express()

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.use("/scripts", express.static(path.join(__dirname, "scripts")))

app.listen(5000, () => {
    console.log("Listening on port " + 5000)
})