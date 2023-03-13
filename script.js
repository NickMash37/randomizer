const btn = document.querySelector('button')
let result = document.querySelector('p')

let resultBtn = btn.addEventListener('click', () => {
    let btnResult = Math.floor(Math.random() * 13)

    if (btnResult <= 1) {
        return result.innerHTML = `Your result ${btnResult} is invalid`
    } else {
        return result.innerHTML = btnResult
    }
})