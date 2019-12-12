function verifyNumbersGenerate(number) {
    if (number < 10 || number > 100) {
        document.querySelector('.box-feedback').style.display = 'Block';

        return false;
    }
    document.querySelector('.box-feedback').style.display = 'none';
    showResult();
}

function getRandomInt(e) {
    e.preventDefault();
    reset()

    var qtdNumbers = parseInt(document.getElementById('qtdNumber').value);

    verifyNumbersGenerate(qtdNumbers);
    var numberRandoms = [...Array(qtdNumbers)].map(() => Math.floor(Math.random() * (100 - 10 + 1) + 10));

    generateFields(numberRandoms);


}

function generateFields(numbers) {
    setNumbersRandoms(numbers);
    orderByCrescent(numbers);
    orderByDesc(numbers);
    verifyNumbersOddPair(numbers);
}

function setNumbersRandoms(data) {
    setDataResult(data, 'number-random');
}

function orderByCrescent(data) {
    var numbersOrdered = data.sort((a, b) => (a > b ? -1 : 1))
    setDataResult(numbersOrdered, 'numbers-ordered');
}

function orderByDesc(data) {
    var numbersOrdered = data.sort()
    setDataResult(numbersOrdered, 'numbers-desc');
}

function verifyNumbersOddPair(data) {
    var odd = [];
    var pair = [];

    data.map((value, index) => {
        if (value % 2 == 0) {
            pair.push(value)
        } else {
            odd.push(value)
        }
    })

    setDataResult(odd.sort((a, b) => (a > b ? -1 : 1)), 'numbers-odd');
    setDataResult(pair.sort(), 'numbers-pair');
}

function setDataResult(data, id) {
    var box;
    box = document.getElementById(id);

    data.map((values, index) => {
        var liElement = document.createElement('li');
        liElement.innerHTML = data[index];
        box.appendChild(liElement);
    })
}

function showResult() {
    document.querySelector('.box-result').style.display = 'flex';
}

function reset() {
    var arrayIds = ['number-random', 'numbers-ordered', 'numbers-desc', 'numbers-odd', 'numbers-pair']

    arrayIds.map((value) => {
        document.getElementById(value).innerHTML = '';
    })
}