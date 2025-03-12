// Exercício 1
interface ICarro {  // Renomeado para ICarro
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

const meuCarro: ICarro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024,
    motor: "2.0"
};

console.log("Dados do carro:", meuCarro);

// ... resto do código continua igual

// Exercício 2
interface Multiplicacao {
    (a: number, b: number): number;
}

const multiplicar: Multiplicacao = (a, b) => a * b;

console.log("Multiplicação 5 x 3:", multiplicar(5, 3));