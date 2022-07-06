import express from "express"

const app = express()

app.listen("3000")

app.post("/", (req, res) => res.send(req.body))
