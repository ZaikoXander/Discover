import express from "express"
import cors from "cors"

const app = express()

app.listen(3333, () => console.log("Rodando na porta 3333"))

app.use(cors())

app.use(express.json())

let users = [
  {
    id: 1,
    name: "Zaiko Xander",
    avatar: "https://avatars.githubusercontent.com/u/80606136?v=4",
    city: "Praia Grande"
  }
]

app.get("/api", (req, res) => res.json({
  users
}))

app.get("/api/:id", (req, res) => {
  const userID = req.params.id

  const user = users.find(user => Number(user.id) === Number(userID))

  if (!user) {
    return res.json("User not found!")
  }

  res.json(user)
})

app.post("/api", (req, res) => {
  const lastId = users[users.length - 1].id
  users.push({
    id: lastId + 1,
    name: req.body.name,
    avatar: req.body.avatar,
    city: req.body.city
  })
  res.json("Saved user")
})

app.put("/api/:id", (req, res) => {
  const userId = req.params.id

  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json("User nor found!")
  }

  const updatedUser = {
    ...user,
    name: req.body.name,
    avatar: req.body.avatar,
    city: req.body.city
  }

  users = users.map(user => {
    if (Number(user.id) === Number(userId)) {
      user = updatedUser
    }
    return user
  })

  res.json("Updated user")
})

app.delete("/api/:id", (req, res) => {
  const userId = req.params.id

  users = users.filter(user => Number(user.id) !== Number(userId))

  res.json("Deleted User")
})
