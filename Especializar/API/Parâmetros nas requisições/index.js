import express from "express"

const app = express()

app.listen("3333")

//middleware
app.use(express.json())


app.get("/", (req, res) => res.send(req.query.name))

app.put("/", (req, res) => res.send(req.body.author))

app.get("/:parametro", (req, res) => res.send(req.params.parametro))

