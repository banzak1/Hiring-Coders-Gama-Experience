const pessoa = {
    nome: "Leo",
    idade: "24",
    cidade: "Nazaré"
}

// Notação de ponto

console.log(pessoa.nome);

// Notação de colchetes


console.log(pessoa['idade']);

// Como desestruturar objetos

const { nome, idade, cidade } = pessoa;

console.log(cidade);