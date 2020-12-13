const article = document.querySelector('article')

const filhos = Array.from(article.children)

filhos.forEach(elem => {
    elem.classList.add('article-element')
})

const h2 = document.querySelector('h2')

console.log('pai de h2', h2.parentElement)
console.log('próximo irmão de h2', h2.nextElementSibling)
console.log('irmão anterior de h2', h2.previousSibling)
