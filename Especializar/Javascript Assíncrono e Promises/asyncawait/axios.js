import axios from "axios"

async function fetchRepos() {
  try {
    const user = await axios.get("https://api.github.com/users/zaikoxander")
    const repos = await axios.get(user.data.repos_url)
    console.log(repos.data)
  }
  catch (error) {
    console.log()
  }
}

fetchRepos()

/* axios
  .get("https://api.github.com/users/zaikoxander")
  .then(response => axios.get(response.data.repos_url))
  .then(repos => console.log(repos.data))
  .catch( error => console.log(error)) */
