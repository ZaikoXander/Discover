const url = "http://localhost:3333/api"

// GET
function getUsers(url) {
  axios.get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

// POST
function addNewUser(url, newUser) {
  axios.post(url, newUser)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.error(error))
}

// GET com parâmetros
function getUser(url, id) {
  axios.get(`${url}/${id}`)
    .then(response => {
      const data = response.data
      userName.textContent = data.name
      userCity.textContent = data.city
      userID.textContent = data.id
      userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

// PUT
function updateUser(url, id, updatedUser) {
  axios.put(`${url}/${id}`, updatedUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

// DELETE
function deleteUser(url, id) {
  axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

// deleteUser(url, 2)

const updatedUser = {
  name: "Marcelo Calvis",
  avatar: "http://picsum.photos/200/300",
  city: "Recife"
}

getUsers(url)
getUser(url, 1)

// addNewUser(url, newUser)

const newUser = {
  name: "Olivia Zars",
  avatar: "http://picsum.photos/200/300",
  city: "Rio de Janeiro"
}

// updateUser(url, 3, updatedUser)