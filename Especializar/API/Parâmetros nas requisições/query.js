import express from "express"

const app = express()

app.listen("3333")

app.get("/", (req, res) => res.send( req.query.nome ))

app.get("/about/user", (req, res) => res.send( req.query ))