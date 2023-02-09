function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if (chuteForInvalido(numero)){
        console.log('valor invalido')
        return
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        console.log(`valor inválido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor}`)
        return
    }
    if (numero ===numeroSecreto) {
        document.body.innerHTML =`
            <h2>Voce acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `       
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML +=`
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else { elementoChute.innerHTML +=`
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}
 function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
 }