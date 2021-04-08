'use strict'
let j = 5;
// alert(j)

//об'єкти
let obj1 = {
    'q': '1',
    'w': '2',
    we: 42,
    2: 4,
    true: false,
    return : 're'
}

// for (let el in obj1) {
//     console.log(el, obj1[el])
// }

label:for (let i; i < 10; i++) {
    for (let j; j < 10; j++) {
        if (j === 8) break label
    }
}


//function declaration
//будь де
// console.log(some(20))
function some(param = 10) {
    return param + 10
}



//function expression
//тільки тут
// анонімна функція
let f = function () {
    alert('123')
}
// f()


// стрєлочна функція
let t = (() => console.log('r'))
t()


//closures

//ex1
function closure(param1) {
    let localVar = 5;
    return function (p) {
        return `sum = ${p + localVar}`
    }
}
let myF1 = closure(2)

//ex2
let cubecounter = (step = 1) => {
    let counter = 0;
    let val = document.getElementById('counter');
    return function () {
        val.innerHTML = counter += step
    }
}
document.getElementById('cube').addEventListener('click', cubecounter(10))

let myF = (function () {
    let r = 0
    function pl() {
        r++
        return r
    }
    function min() {
        r--
        return r
    }
    return {
        plus: pl,
        minus: min
    }
})();
