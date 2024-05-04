"use strict";
const alunos = [
    {
        nome: "Kauan",
        cursos: ["front-end", "UX/UI"],
        idade: 24,
    },
    {
        nome: "Ana",
        cursos: ["Front-end", "Python"],
        idade: 23,
    },
];
alunos.push({
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 29,
});
const novoAluno = {
    nome: "Lucas",
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
