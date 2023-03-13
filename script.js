const btn = document.querySelector('.roll-btn')
const reset = document.querySelector('.reset-btn')
let result = document.querySelector('p')

let resultBtn = btn.addEventListener('click', () => {
    let btnResult = Math.floor(Math.random() * 13)

    if (btnResult <= 1) {
        Math.floor(Math.random() * 13)
    } else {
        return result.innerHTML = btnResult
    }
})

reset.addEventListener('click', () => {
    return result.innerHTML = 0
})