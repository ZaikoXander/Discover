import express from "express"

const app = express()

app.listen("3000")

//middleware
app.use(express.json())

let author = "Zaiko"

app.get("/", (req, res) => res.send(author))

app.put("/", (req, res) => {
  author = req.body.author
  res.send(author)
})
// put -> editar
