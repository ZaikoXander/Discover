import express from "express"

const app = express()

app.listen("3333")

//middleware
app.use(express.json())

app.post("/", (req, res) => {
  const { nome, cidade, livros_favoritos } = req.body
  // res.send(`meu nome é ${nome} e minha cidade é ${cidade}`)
  res.send(livros_favoritos)
})
