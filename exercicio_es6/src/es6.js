const nomeNotaAlunos = [
    {nome:'kauan', nota: 9},
    {nome:'hosea', nota: 7},
    {nome:'arthur', nota: 4},
    {nome:'jhon', nota: 8},
    {nome:'dutch', nota: 3},
    {nome:'jack', nota: 5},
    {nome:'thomas', nota: 6}
];

function alunosComNotasMaioresQue6(arrayNomeNotaAlunos) {
    return arrayNomeNotaAlunos.filter(aluno => aluno.nota >= 6);
}
const alunosQuePassaram = alunosComNotasMaioresQue6(nomeNotaAlunos);
console.log("Alunos que passaram:");
console.log(alunosQuePassaram);