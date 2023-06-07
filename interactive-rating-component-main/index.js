let value  

const radios = document.querySelectorAll('.radio')

radios.forEach(radio => {
    radio.addEventListener('click', () => {
        removerClasse()
        value = radio.innerText
        radio.classList.add('cor-selecionada')
    })
})

function removerClasse() {
    radios.forEach(radio => {
        radio.classList.remove('cor-selecionada')
    })
}

const firstLayer = document.querySelector('#firstLayer')
const secondLayer = document.querySelector('#secondLayer')
const span = document.querySelector('#span')

document.querySelector('#submit').addEventListener('click', submit)

function submit(ev) {
    ev.preventDefault()
    if (value !== undefined) {
        firstLayer.classList.add('hide-layer')
        secondLayer.style.display = 'flex';
        span.innerText = value
    }
}