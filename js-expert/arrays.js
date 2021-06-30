const alunosGama = ["Leo", "Jessica", "Caio", "Banzak"];

// Acessar informações do array
console.log(alunosGama[3]);

// Operador spread {...}
const alunosXp = [...alunosGama, "Ninja"];

console.log(alunosXp);

// Métodos de iteração
    // Map
    alunosXp.map(aluno => console.log(aluno));

    // FIlter
    const numeros = [0, 45, 68, 87, 52, 57, 96];

    const numerosImpares = numeros.filter(impares => impares % 2 !=0);
    
    console.log(numerosImpares);

    const numerosPares = numeros.filter(pares => pares % 2 == 0);

    console.log(numerosPares);

    // Sort

    const numerosCrescentes = numeros.sort((a,b) => a-b);

    console.log(numerosCrescentes);

    const numerosDecrescentes = numeros.sort((a,b) => b-a);

    console.log(numerosDecrescentes);

    // Reduce = Reduz o array a uma operação matemática

    const numbers = [5, 62, 5, 79 , 3 , 4];

    const soma = numbers.reduce((valorAnterior, valorAtual) => {
        return valorAnterior + valorAtual;
    },0)

    console.log(soma);


