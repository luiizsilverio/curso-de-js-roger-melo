/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/

const strZero = (number, size) => {
  let saida = number.toString()
  let qt0 = size - saida.length
  for (let i = 0; i < qt0; i++) {
    saida = `0${saida}`
  }
  return saida
}

const formatDate = date => {
   const dia = date.getDate()
   const mes = date.getMonth() + 1
   const ano = date.getFullYear()
   return strZero(dia,2) +'/'+ strZero(mes,2) +'/'+ ano
}

const vdata = new Date('June 14 1973 11:30')
console.log(formatDate(vdata))
console.log('dateFns.format:', dateFns.format(vdata, 'DD/MM/YYYY'))
console.log('dateFns.isToday:', dateFns.isToday(vdata))
console.log('dateFns.parse:', dateFns.parse('1973-06-14T23:30:00'))

/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/

const meses = [
  'Janeiro', 
  'Fevereiro', 
  'Março', 
  'Abril', 
  'Maio',
  'Junho',
  'Julho', 
  'Agosto', 
  'Setembro', 
  'Outubro', 
  'Novembro', 
  'Dezembro'
]

const diaSem = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']              
  
const dataHora = (date) => {
  
  const dia = date.getDate()
  const mes = date.getMonth()
  const ano = date.getFullYear()
  const hora = date.getHours()
  const min = date.getMinutes()
  const diaS = date.getDay()

  return `${strZero(hora,2)}:${strZero(min,2)} - ${diaSem[diaS]},  ${dia} de ${meses[mes]} de ${ano}`
}

console.log(dataHora(vdata))

/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true }
const { id, isVerified } = user

console.log(id, isVerified)

/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: 'Bender' }
const robotB = { name: 'HAL 9000' }

const { name: nameA } = robotA
const { name: nameB } = robotB

console.log(nameA, nameB)

/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = 'a'
const b = 'b'
const c = 'c'
const abc = { a, b, c }
console.log(abc)

/*
  06

  - Refatore o código abaixo.
*/

const useDataSomewhereElse = value => {
  console.log(value)
}

const updateSomething = (data = {}) => {
    /*
      const target = data.target
      const property = data.property
      let willChange = data.willChange
    */

  let { target, property, willChange } = data

  if (willChange === 'valor indesejado') {
    willChange = 'valor desejado'
  }

  useDataSomewhereElse({ target, property, willChange })    
    /*
      useDataSomewhereElse({ target, property, willChange })
        target: target,
        property: property,
        willChange: willChange
      })
    */
}

updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' })

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

const clockContainer = document.querySelector('.clock-container')

const getClockHTML = (hours, minutes, seconds) => `
  <span>${String(hours).length === 1 ? `0${hours}` : hours}</span> :
  <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> :
  <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
`
const updateClock = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  clockContainer.innerHTML = getClockHTML(hours, minutes, seconds)
}

setInterval(updateClock, 1000)
