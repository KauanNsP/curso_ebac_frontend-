function multiplicacao (numero1: number, numero2: number): number {
    return numero1 * numero2;
}
function dizOla(nome: string): string {
    return "Olá" + nome;
}

const ResultadoDaConta = multiplicacao(500, 550);
const dizOlaParaOTs = dizOla("Kauan");
console.log("Resultado da conta de multiplicação:", ResultadoDaConta);
console.log(dizOlaParaOTs);