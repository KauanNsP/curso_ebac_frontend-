const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['gustavo', 'julia', 'paula', 'wagneeeeeeer'];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'frontend'
    }
})


const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'paula'
})

console.log(indiceDaPaula)

console.log(alunos2);
alunos2.push ({
    nome: 'lucio',
    curso: 'backend'
})

const todosAlunosSaoDeFrontend = alunos2.every(function(item) {
    return item.curso === 'frontend'
})

console.log(todosAlunosSaoDeFrontend);

const existeAlgumAlunoDeBackend = alunos2.some(function(item) {
    return item.curso === 'backend' && item.curso === 'frontend'
})

console.log(existeAlgumAlunoDeBackend);

function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'backend';
}

const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend)

console.log(alunosDeBackend)
