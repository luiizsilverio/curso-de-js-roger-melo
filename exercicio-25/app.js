/*
  01

  - Exiba no console o index da 1ª (e única) ocorrência do mês "Fevereiro" do 
    array "months".
*/

const months = [
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

//const fev = months.findIndex(mes => mes === 'Fevereiro')
const fev = months.indexOf('Fevereiro')
console.log('Fevereiro', fev)

/*
  02

  - Crie um objeto de data que represente o momento presente;
  - Exiba o objeto no console.
*/

const hoje = new Date()
console.log(hoje)

/*
  03

  - Baseado no objeto que você acabou de criar, exiba o ano atual no console.
*/

console.log('Ano', hoje.getFullYear())

/*
  04

  - Crie um objeto de data que represente um momento passado;
  - Exiba o objeto no console.
*/

const birth = new Date('June 14 1973 11:30')
console.log(birth)

/*
  05

  - Exiba, no console, a hora do objeto que você acabou de criar.
*/

console.log(birth.getHours())

/*
  06

  - Crie um objeto de data que represente um momento futuro;
  - Exiba o objeto no console.
*/

const future = new Date('January 1 2030 12:30')
console.log(future)

/*
  07

  - Exiba no console a quantidade de dias entre o momento futuro e o passado.
*/

const diff = future.getTime() - birth.getTime()
const dias = Math.round(diff / 1000 / 60 / 60 / 24)
console.log(dias)

/*
  08
  
  Assim como a 1ª aplicação que implementamos no curso (Quiz), considere fazer 
  da aplicação To-do List uma peça do seu portfólio.

  Desenvolva a sua versão do To-do List e, se você sentir que a desenvolveu 
  por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  Você pode hospedá-la no Netlify seguindo o mesmo tutorial que recomendei na 
  aplicação do Quiz: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/

