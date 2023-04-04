const input = document.getElementById('input1')
const input2 = document.getElementById('input2')
const ansBox = document.getElementById('answer')

let butt = document.querySelectorAll('button')


butt.forEach(item => {item.addEventListener("click", event => {
    
    console.log('clicked');
})})



class calculator {
    constructor(ans) {
        this.ans = ans
    }

    add() {
        butt[0].style.background = 'green';
        this.ans = parseInt(input.value) + parseInt(input2.value);
    }
    subtract() {
        this.ans = parseInt(input.value) - parseInt(input2.value);
    }
    multiply() {
        this.ans = parseInt(input.value) * parseInt(input2.value);
    }
    divide() {
        this.ans = parseInt(input.value) / parseInt(input2.value);
    }
    show() {
        ansBox.innerHTML = this.ans;
        document.getElementById('lupo').style.display = 'block'
    }
    clear() {
        this.ans = 0;
        ansBox.innerHTML = this.ans
    }
}


let calc = new calculator(0)

if (calc.ans == NaN) {
    console.log('lupo')
}

function displayInput() {
    console.log(input.value)
}

function againDisplayInput() {
    console.log(input2.value)
}

const test1 = {
    fun: function() {
        console.log('add')
        console.log(input.value)
    },
    fun2: function() {
        console.log('subtract')
    }
}