function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    resolve(execucoes);
    }catch(e) {
        reject('Deu erro na interação dos números')
    }
})

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {}, 3000)
            resolve(`logado com o usuário: ${login}`)
    })
}

//console.log(funcaoMuitoPesada());

async function execucaoPrincipal() {
    console.log("ïnicio");
    //await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
    promiseComParametros('kauan@gmail.com', 123456).then(resultado => {
        console.log(resultado);
    })

    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado);
    }catch(e) {
        console.log(e)
    }
    console.log("fim");
}

execucaoPrincipal();
