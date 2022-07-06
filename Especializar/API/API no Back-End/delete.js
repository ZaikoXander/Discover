import express from "express"

const app = express()

app.listen("3000")

app.delete("/:identificador", (req, res) => {
  res.send(req.params.identificador)
})
// delete -> recebe identificadores(id) para apagar informações
