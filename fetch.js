
// usando fetch().then ---------------------------

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    console.log('Response', response)
    return response.json()
})
.then(response => console.log(response))  
.catch(error => console.error(error))

// usando async/await ----------------------------

const getUsers = async() => {   
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  console.log('users', users)
}

console.log(1)
console.log(2)

getUsers()

console.log(3)
console.log(4)
