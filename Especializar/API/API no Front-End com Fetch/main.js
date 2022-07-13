const url = "http://localhost:3333/api"

function getUsers(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser(url, id) {
  fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userCity.textContent = data.city
      userAvatar.src =data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(url, newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function updateUser(url, updateUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",  
    body: JSON.stringify(updateUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function deleteUser(url, id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
  name: "Haate",
  avatar: "http://picsum.photos/200/300",
  city: "São Paulo"
}

// addUser(url, newUser)

const updatedUser = {
  name: "Mayk Brito",
  avatar: "https://avatars.githubusercontent.com/u/6643122?v=4",
  city: "Parana"
}

// updateUser(url, updatedUser, 9)

deleteUser(url, 18)

getUsers(url)
getUser(url, 9)
