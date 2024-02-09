
const form = document.getElementById('formulario');
const primeiroNumero = document.getElementById('primeiroNumero');
const segundoNumero = document.getElementById('segundoNumero');
const mensagemSucesso = 'Tudo certo! O segundo número é maior que o primeiro'

form.addEventListener('submit', function(e) {
    e.preventDefault();

var valorprimeiroNumero = Number(primeiroNumero.value);
var valorsegundoNumero = Number(segundoNumero.value);

    if (valorprimeiroNumero < valorsegundoNumero) {
    alert('Tudo certo! Segundo número maior que o primeiro')
        primeiroNumero.value = '';
        segundoNumero.value = '';
    } else {
        alert('Atenção! segundo número deve ser maior que o primeiro')
    }
console.log(form);
});


