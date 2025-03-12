// Exercício 5
type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "boolean") {
        console.log(resposta ? "Operação bem-sucedida" : "Operação falhou");
    } else {
        console.log("Mensagem do servidor:", resposta);
    }
}

processarResposta(true);
processarResposta("Dados atualizados com sucesso");

// Exercício 6
interface Estudante {
    nome: string;
    curso: string;
}

interface Trabalhador {
    empresa: string;
    cargo: string;
}

type EstudanteTrabalhador = Estudante & Trabalhador;

const pessoaEstudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Stephen Curry",
    curso: "Engenharia de Software",
    empresa: "TechCorp",
    cargo: "Desenvolvedora Junior"
};

console.log("Estudante Trabalhador:", pessoaEstudanteTrabalhador);