class Calculator {

    constructor(gross, months, tax) {
        this.gross = gross;
        this.months = months;
        this.tax = tax;
    }

    calculate() {
        let taxAmount = this.gross * (this.tax / 100);
        let payment = (this.gross - taxAmount) / this.months;

        return {payment, taxAmount};
    }

}

export default Calculator;
