function verifyNumbersGenerate(number) {
    
    var boxFeedback;

    boxFeedback = document.querySelector('.box-feedback');

    
    if( number < 10 || number > 100 ) {
        boxFeedback.style.display = 'Block';
        return false;
    }

    boxFeedback.style.display = 'none';
}

function getRandomInt(e) {
    e.preventDefault();

    let qtdNumbers = parseInt(document.getElementById('qtdNumber').value);
    
    verifyNumbersGenerate(qtdNumbers);

    let numberRandoms  = [...Array(qtdNumbers)].map(() => Math.floor(Math.random() * (100 - 10 + 1) + 10));
}
