let meuMap = new Map();
meuMap.set("nome", "KauaN");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("sobrenome"));

//meuMap.clear();

console.log(meuMap.size);

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

//[nome => KauaN]
//[stack => , css, js]

const cpfs = new Set();
cpfs.add('15405004030')
cpfs.add('65713281000')
cpfs.add('43760211054')

console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['kauan poielli', 'maria isabel', 'jose paulo', 'luana', 'luana', 'kauan poielli']
const arrayComoSet =new Set([...array])
const arraySemItensDuplicados = [...arrayComoSet]
console.log(arrayComoSet);
console.log(arraySemItensDuplicados);

