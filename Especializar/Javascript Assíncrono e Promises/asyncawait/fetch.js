/* fetch("https://api.github.com/users/zaikoxander")
  .then( response => response.json() )
  .then( data => fetch(data.repos_url) )
  .then( res => res.json() )
  .then( d => console.log(d) )
  .catch( err => console.log(err))
*/


async function start() {
  try {
    const url = "https://api.github.com/users/zaikoxander"
    const user = await fetch(url).then( r => r.json())
    const userRepos = await fetch(user.repos_url).then( r => r.json())
    console.log(userRepos)
  }
  catch (error) {
    console.log(error)
  }
}

start()//.catch(e => console.log(e))
