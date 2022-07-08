import express from "express"
import axios from "axios"

const app = express()

app.listen("3333")

app.get("/", (req, res) => {
  axios.get("https://api.github.com/users/zaikoxander")
    .then(result => res.send(`<img src="${result.data.avatar_url}">`))
    .catch(error => console.error(error))
})
