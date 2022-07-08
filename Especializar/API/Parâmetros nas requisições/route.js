import express from "express"

const app = express()

app.listen("3333")

app.get("/", (req, res) => res.send("oi"))
app.get("/:variavel", (req, res) => res.send(req.params.variavel))
app.get("/identidade/:nome", (req, res) => res.send(req.params.nome))
