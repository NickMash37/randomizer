const btn = document.querySelector('.roll-btn')
const reset = document.querySelector('.reset-btn')
let history = document.querySelector('.history')
let result = document.querySelector('p')

let historyArr = []

let resultBtn = btn.addEventListener('click', () => {
    let btnResult = Math.floor(Math.random() * 13)

    if (btnResult <= 1) {
        Math.floor(Math.random())
    } else {
        result.innerHTML = btnResult
        historyArr.push(btnResult)

        if(historyArr.length == 5) {
            let res = historyArr.reduce((acc, number) => number + acc, 0)
            let fin = document.createElement('div')
            fin.className = 'final-result'
            fin.innerHTML = `Your result is ${res}`
            history.appendChild(fin)
            historyArr.length = 0
        } 

        console.log(btnResult);
    }
})

reset.addEventListener('click', () => {
    result.innerHTML = 0
    historyArr.length = 0
    history.innerHTML = historyArr
})
