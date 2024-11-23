class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao() {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}

let pessoa1 = new Pessoa("Klinger", 50);
console.log(pessoa1.saudacao());
console.log(pessoa1.idade);
