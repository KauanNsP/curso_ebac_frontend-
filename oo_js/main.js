
class personagem {
    constructor(nome, idade) {
    if (this.constructor === personagem) {
        throw new Error("Não é possível classe abstrata diretamente.");
    }
    this.nome = nome;
    this.idade = idade;
    }

    obterNome() {
    return this.nome;
    }

    definirNome(novoNome) {
    this.nome = novoNome;
    }

    obterIdade() {
    return this.idade;
    }

    definirIdade(novaIdade) {
    this.idade = novaIdade;
    }

    cumprimentar() {
    return `Olá, sou ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}

    class aluno extends personagem {
    constructor(nome, idade, curso) {
    super(nome, idade);
    this.curso = curso;
    }

    obterCurso() {
    return this.curso;
    }

    definirCurso(novoCurso) {
    this.curso = novoCurso;
    }

    cumprimentar() {
    return `Olá, sou ${this.nome}, tenho ${this.idade} anos estudo ${this.curso}.`;
    }
}

class Professora extends personagem {
    constructor(nome, idade, materia) {
    super(nome, idade);
    this.materia = materia;
    }

    obtermateria() {
    return this.materia;
    }

    definirmateria(novamateria) {
    this.materia = novamateria;
    }

    cumprimentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, sou professor de filosofia e estou estudando ${this.materia}.`;
    }
}

    const aluno1 = new aluno("Kauan", 24, "Programação");
    const aluno2 = new aluno("otavio", 30, "Medicina");
    const professora1 = new Professora("joelson", 45, "Matemática");
    console.log(aluno1.cumprimentar());

    console.log(aluno2.cumprimentar()); 
    console.log(professora1.cumprimentar());

