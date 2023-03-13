const btn = document.querySelector('button')
let result = document.querySelector('p')

let resultBtn = btn.addEventListener('click', () => {
    let btnResult = Math.floor(Math.random() * 13)

    if (btnResult <= 1) {
        Math.floor(Math.random() * 13)
    } else {
        return result.innerHTML = btnResult
    }
})