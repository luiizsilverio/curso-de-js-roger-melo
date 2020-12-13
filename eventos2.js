const vpar = document.querySelector('.copy-me')

vpar.addEventListener('copy', () => {
    console.log('Texto copiado')
})

const box = document.querySelector('.box')

box.addEventListener('mousemove', event => {
    box.textContent = `X ${event.offsetX} | Y ${event.offsetY}`
})

document.addEventListener('wheel', event => {
    console.log(event.pageX, event.pageY)
})
