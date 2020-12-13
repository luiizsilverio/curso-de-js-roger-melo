const el = document.querySelector('.error')
console.log(el)
console.log(el.textContent)

const els = document.querySelectorAll('p')
console.log(els)
els.forEach((item,index) => {
    console.log(index, item)
})

const tit = document.getElementById('titulo')
tit.style.color = 'blue'
console.log(tit)

const err = document.getElementsByClassName('error')
console.log(err)

const tagp = document.getElementsByTagName('p')
console.log(tagp)

const vpar = document.querySelectorAll('p')

vpar.forEach((item, index) => {
    item.innerText += ` (Novo texto ${index + 1})`
})

div = document.querySelector('.success')
console.log(div.innerText)
console.log(div.innerHTML)

div.innerHTML = '<h2>Novo h2</h2>'
console.log(div.innerHTML)

