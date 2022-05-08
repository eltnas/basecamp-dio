const lista = [
    {
        name : 'Sabão em pó',
        preco : 30,
    },
    {
        name : 'Cereal',
        preco : 12,

    },
    {
        name : 'Toalha',
        preco : 30,
    }
];

const saldo = 100;

function calcSaldo(saldo, lista) {
    return lista.reduce(function (prev, current, index){
        console.log('rodada: ', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldo);
}

console.log(calcSaldo(saldo, lista));