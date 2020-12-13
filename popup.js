const btn = document.querySelector('.btn-popup')
const popup = document.querySelector('.popup-wrapper')

btn.addEventListener('click', () => {
    popup.style.display = 'block'
})


popup.addEventListener('click', event => {

    const clicou = event.target.classList[0]
    const classes = ['popup-close','popup-link','popup-wrapper']
    const podeFechar = classes.some( item => item === clicou )    
    
    if (podeFechar) {
        popup.style.display = 'none'
    }
    
})