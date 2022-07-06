import express from "express"

const app = express()

app.listen("3000")

// app.route("/").get((req, res) => res.send("hello world"))
app.get("/", (req, res) => res.send("hello world"))
