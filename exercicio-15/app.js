/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/

const ul = document.querySelector('.videos')

const el = Array.from(ul.children)
el.forEach(item => {
  item.classList.add('video')
})

console.log(el)

/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

const pai = document.querySelector('h2').parentElement
console.log('pai de h2', pai)

/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

const h1 = document.querySelector('h1')
const prox = h1.nextElementSibling
console.log('próximo irmão de h1', prox)

/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

const prev = h1.previousElementSibling
console.log('irmão anterior de h1', prev)

/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/

const clicou = (event => {
  console.log(event.target)
})

el.forEach(item => {
  item.addEventListener('click', clicou)
})

/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}]

const button = document.querySelector('button')

//primeira maneira de adicionar vídeos
const addVideos = () => {
  videos.forEach( item => {
    const li = document.createElement('li')
    li.textContent = item.name
    ul.append(li)    
  })
}

//segunda maneira de adicionar vídeos
const addVideos2 = () => {
  videos.forEach( ({name, length}) => {
    ul.innerHTML += `<li>${name} | ${length}</li>`
  })
}

button.addEventListener('click', addVideos2)

/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/

h1.addEventListener('click', () => {
   document.body.innerHTML = ''  
})
