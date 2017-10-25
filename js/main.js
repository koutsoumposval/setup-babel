import Calculator from './Calculator'

document.getElementById('calculate').addEventListener('click', function () {
    let gross = document.getElementById("gross").value;
    let months = document.getElementById("months").value;
    let tax = document.getElementById("tax").value;

    let calc = new Calculator(gross, months, tax);
    let result = calc.calculate();

    document.getElementById("payment").innerHTML = result.payment.toFixed(2);
    document.getElementById("tax-amount").innerHTML = result.taxAmount.toFixed(2);
});