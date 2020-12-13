const ul = document.querySelector('ul')
const botao = document.querySelector('button')

botao.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = 'Novo item'
    ul.append(li)
})

/* ao invés de adicionar o evento a cada LI, vamos criar um evento p/ a UL

const li = document.querySelectorAll('li')

li.forEach( item => {
    item.addEventListener('click', event => {
        const el = event.target
        event.stopPropagation()
        el.remove()        
    })
})
*/

// dessa forma, ao adicionar um item li, não precisa adicionar o evento
ul.addEventListener('click', event => {
    const el = event.target
    console.log(event)
    if (el.tagName === 'LI'){
        el.remove()
    }
})
