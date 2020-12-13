/*
  01

  - Usando promises, faça um request para este endpoint:
    https://jsonplaceholder.typicode.com/users
  - Se o request estiver ok, exiba os objetos no console;
  - Se o request não estiver ok, exiba no console "Não foi possível obter os 
    dados dos usuários."
*/

const getUser = (url) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()
  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const data = JSON.parse(request.responseText)
        resolve(data)
      }
      reject('Não foi possível obter os dados dos usuários')
    }
  })
  request.open('GET', url)
  request.send()
})

getUser('https://jsonplaceholder.typicode.com/users')
  .then(console.log)
  .catch(console.error)

/*
  02

  - Crie uma função chamada `calculator`, que funcione assim:
    - A função deve receber um parâmetro que dirá qual operação matemática ela
      vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
  - Essa função deve retornar uma segunda função que deve receber dois 
    parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a 
    mensagem: "Resultado da operação: NUMERO_1 OPERADOR NUMERO_2 = RESULTADO."
  - Se o operador não for válido, retorne a mensagem "Operação inválida."
*/

const calculator = operador => (a, b) => {
  let resultado = 0
  switch (operador) {
    case '+': resultado = a + b
              break
    case '-': resultado = a - b
              break
    case '*': resultado = a * b
              break
    case '/': resultado = a / b
              break
    case '%': resultado = a % b  
              break
    default:  return 'Operação inválida'        
  }    
  return `Resultado da operação: ${a} ${operador} ${b} = ${resultado}.`
}

const operacoes = ['+', '-', '*', '/', '%', '?']

operacoes.forEach(oper => {
  const calcule = calculator(oper)
  console.log(calcule(10,3))
})

/*
  03

  - Crie 2 arrays, `sul` e `sudeste`, que serão as regiões do Brasil. Cada 
    array deve conter os estados dessa região;
  - Crie uma const chamada `brasil`, que irá receber as duas regiões 
    concatenadas. Mostre o `brasil` no console;
  - Adicione 3 novos estados da região Norte no início do array e mostre no 
    console. Pesquise pelo método "unshift" no MDN;
  - Remova o primeiro estado do array `brasil` e mostre-o no console;
  - Crie um novo array chamado `newSul`, que recebe somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
*/

const sul = ['Paraná', 'Rio Grande do Sul', 'Santa Catarina']

const sudeste = [
  'São Paulo', 
  'Minas Gerais', 
  'Rio de Janeiro', 
  'Espírito Santo'
]

let brasil = sul.concat(sudeste)
console.log('br', brasil)

brasil.unshift('Amazonas', 'Pará', 'Acre')
console.log('br', brasil)

const uf = brasil.shift()
console.log(uf, brasil)

const newSul = brasil.filter(uf => sul.indexOf(uf) >= 0)
console.log('Sul', newSul)

/*
  04

  - Crie um novo array chamado `nordeste`, que tenha os estados do nordeste;
  - Remova de `brasil` os estados do `sudeste`, colocando-os em uma constante
    chamada `newSudeste`. Pesquise pelo método "splice";
  - Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado;
  - Percorra o array `brasil` e gere um novo array chamado `newBrasil`. Esse 
    array deve ter cada item como um objeto, com as propriedades:
      - `id`: que será o índice do array `brasil`;
      - `estado`: que será o estado do array `brasil`;
  - Percorra o array `brasil` e verifique se os estados tem mais de 7 letras 
    cada, atribuindo o resultado à uma constante. Se tiver, mostre no console a 
    mensagem "Sim, todos os estados tem mais de 7 letras.". Se não, mostre no 
    console: "Nem todos os estados tem mais de 7 letras.". Pesquise pelo método 
    every.
*/

const nordeste = [
  'Alagoas', 
  'Bahia', 
  'Ceará', 
  'Maranhão', 
  'Paraíba', 
  'Pernambuco', 
  'Piauí', 
  'Rio Grande do Norte', 
  'Sergipe'
]

const newSudeste = brasil.filter(uf => sudeste.indexOf(uf) >= 0)

newSudeste.forEach(uf => {
  const p = brasil.indexOf(uf)
  if (p >= 0) {
    brasil.splice(p, 1)
  }
})

console.log('Sudeste', newSudeste)

brasil = brasil.concat(nordeste)
console.log('Brasil', brasil)

const newBrasil = brasil.map((uf, index) =>
  ({ id: index, estado: uf }))

console.log('newBrasil', newBrasil)

const totUF7 = brasil.every(uf => uf.length > 7)

const message = totUF7
  ? 'Sim, todos os estados tem mais de 7 letras.'
  : 'Nem todos os estados tem mais de 7 letras.'

console.log(message)  

/*
  05

  - Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma constante. Se esse estado existir no array, mostre no 
    console "Ceará está incluído.". Se não, mostre "Ceará não foi incluído =/";
  - Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "ESTADO pertence ao Brasil.";
  - Atribua o novo array a uma constante;
  - Filtre o array criado acima, retornando somente os estados que tiverem ID 
    par. Atribua este novo array à uma constante.
*/

const temCeara = brasil.includes('Ceará')

temCeara 
  ? console.log('Ceará está incluído')
  : console.log('Ceará não está incluído')

const brasil2 = newBrasil.map(({ id, estado }) => 
  ({ id: ++id, estado: `${estado} pertence ao Brasil.`}))

console.log('br2', brasil2)

const brpar = brasil2.filter(({ id }) => id % 2 === 0)

console.log('par', brpar)
