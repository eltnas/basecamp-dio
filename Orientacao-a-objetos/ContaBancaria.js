class contaBancaria {
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if (valor > this._saldo){
            return 'Operação negada';
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'Corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria{
    constructor (agencia, numero, cartaoDebito){
        super(agencia, numero);
        this.tipo = 'Poupança';
        this._cartaoDebito = cartaoDebito;
    }

    get cartaoDebito() {
        return this._cartaoDebito;

    }

    set cartaoDebito(valor) {
        this._cartaoDebito = valor;
    }
}

class contaUnivertaria extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Universitaria';
    }

    sacar(valor){
        if (valor > 500) {
            return 'Operação Negada!';
        }

        this._saldo = this._saldo - valor;
    }
}