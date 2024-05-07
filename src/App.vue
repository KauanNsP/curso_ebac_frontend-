<script setup>
import { reactive } from 'vue';

const nome = "Kauan Poielli"
const meuObj = {
  nome: "Kauan",
  filmeFavorito: "qualquer"
}

function dizOla(nome) {
  return `${nome} diz oi`;
}

const enderecoDaImgDoArthur = "https://coolwallpapers.me/picsup/5075779-arthur-morgan-red-dead-redemption-red-dead-redemption-2-video-game.png"
const imgDuth = "https://wallpapercave.com/wp/wp4989806.jpg"

const botaoEstaDesabilitado = false

const gostaDoArthur = true
const gostaDoDuth = false

const estaAutorizado = true

//let contador = 0 
const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000000,
  transferindo: 0,
  nomes: ['gian', 'paulo', 'luisa', 'monica'],
  nomeAInserir: '',
})

function incrementar(){
  estado.contador++;
}
function decrementar(){
  estado.contador--;
}

function alteraEmail(evento) {
  estado.email = evento.target.value;
}

function mostraSaldoFuturo() {
  const { saldo, transferindo } = estado;
  return saldo - transferindo;
}

function validaValorDeTransferencia() {
  const { saldo, transferindo } = estado;
  return saldo >= transferindo;
}

function cadastraNome() {
  if (estado.nomeAInserir.length >= 3) {
    estado.nomes.push(estado.nomeAInserir)
  } else {
    alert("Digite mais caracteres")
  }
  console.log(estado);
}

</script>

<template>
  <h1>{{ dizOla("Kauan") }}</h1>
  <img v-if="gostaDoArthur" :src="enderecoDaImgDoArthur" alt="Arthur">
  <img  v-else-if="gostaDoDuth" :src="imgDuth" alt="Duth">
  <h2 v-else>Não curte rdr2</h2>

  <h1 v-if="estaAutorizado">Bem-vindo</h1>
  <h1 v-else>Não possui acesso</h1>

  <button :disabled="botaoEstaDesabilitado">Enviar menssagem</button>

  <br />
  <hr />

  {{ estado.contador }}

  {{ contador }}

  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br />
  <hr />

  {{ estado.email }}
  <input type="email" @keyup="alteraEmail">

  <br />
  <hr />

  saldo: {{ estado.saldo }} <br />
  transferindo: {{ estado.transferindo }} <br />
  saldo depois da transferência: {{ mostraSaldoFuturo() }} <br />
  <input class="campo" :class="{ invalido: !validaValorDeTransferencia() }" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir" />
  <button v-if="validaValorDeTransferencia()">transferir</button>
  <span v-else>Valor maior que o saldo</span>

  <br />
  <hr />

  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>
  <input @keyup="evento => estado.nomeAInserir = evento.target.value" type="text" placeholder="Digite um novo nome">
  <button @click="cadastraNome" type="button">Cadastrar novo nome</button>

  <h3 v-for="nome in estado.nomes">{{ nome }}</h3>
</template>

<style scoped>
img {
  max-width: 400px
}

.invalido {
  outline-color: red;
  border-color: red;
}

.campo {
  border: 2px solid #000;
}
</style>
