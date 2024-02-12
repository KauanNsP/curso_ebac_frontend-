const form = document.getElementById('Formulario');
const nomes = [];
const numeros = [];

let linhas = '' ;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNome = document.getElementById('input-nome');
    const inputTel = document.getElementById('input-tel');

    if(nomes.includes(inputNome.value)) {
        alert(`O nome: ${inputNome.value} já foi inserido`);
    } else {    
        nomes.push(inputNome.value);

        if(numeros.includes(inputTel.value)){
            alert(`O telefone: ${inputTel.value} já foi inserido`);
        } else {
            numeros.push(inputTel.value);

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += '</tr>';
    

    linhas += linha;
    }}

    inputTel.value = '';
    inputNome.value = '';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

