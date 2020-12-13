const getPokemons = async () => {
  const bulbasaur = fetch('https://pokeapi.co/api/v2/pokemon/1')
  const charmander = fetch('https://pokeapi.co/api/v2/pokemon/4')
  const squirtle = fetch('https://pokeapi.co/api/v2/pokemon/7')

  // Promiss.all retorna um array de promises
  // Quando todas as promises forem resolvidas, all retorna 
  // uma única promisse, contendo um array com todos os valores
  // retornados pelas promises.

  const pokemons = await Promise.all([
    bulbasaur, 
    charmander, 
    squirtle
  ])

  console.log(pokemons[0])
  console.log(pokemons[1])
  console.log(pokemons[2])

}

getPokemons()