// Exercício 3
function inverterArray<T>(array: T[]): T[] {
    return [...array].reverse();
}

const numeros = [1, 2, 3, 4, 5];
const palavras = ["TypeScript", "é", "incrível"];

console.log("Array de números invertido:", inverterArray(numeros));
console.log("Array de strings invertido:", inverterArray(palavras));

// Exercício 4
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

interface Usuario {
    nome: string;
    email: string;
}

class RepositorioUsuarios implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];

    salvar(usuario: Usuario): void {
        this.usuarios.push(usuario);
    }

    obterTodos(): Usuario[] {
        return this.usuarios;
    }
}

const repo = new RepositorioUsuarios();
repo.salvar({ nome: "João", email: "joao@email.com" });
repo.salvar({ nome: "Maria", email: "maria@email.com" });
console.log("Usuários salvos:", repo.obterTodos());