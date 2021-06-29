// If ... Else comum
/*
if (idade  >= 18) {
    return 'maior de idade'
} else {
    return 'menor de idade'
}

idade >= 18 ? 'Maior de idade': 'Menor de idade'
*/

function calculaIdade(idade) {
    return idade >= 18 ? 'Maior de idade': 'Menor de idade'
}

console.log(calculaIdade(17));