function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var numeroSecreto = parseInt(getRandomArbitrary(1, 1001))
var qtdChutes = 10

var chute = prompt('Digite um número entre 1 e 1000')
var flag = 1

if(chute < 0 || chute > 1001) {
  alert(`O seu chute deve ser um número entre 1 e 1000.`)
}
else {
  while(qtdChutes > 0) {
    if(flag != 1) { // PARA NÃO LER O CHUTE 2X CASO ELE NÃO ENTRE NO IF DA LINHA 11
      var chute = prompt('Digite um número entre 1 e 1000')
    }
    qtdChutes--

    if(chute == numeroSecreto) {
      alert(`Parabéns! Você acertou!\nO número secreto é ${numeroSecreto}.`)
      break
    }
    else if(chute < numeroSecreto) {
      alert(`Ops! Você errou :/ \n\nMas te dou uma dica:\nO número secreto é maior que ${chute}.\n\nTentativas restantes = ${qtdChutes}`)
    }
    else if(chute > numeroSecreto) {
      alert(`Ops! Você errou :/ \n\nMas te dou uma dica:\nO número secreto é menor que ${chute}.\n\nTentativas restantes = ${qtdChutes}`)
    }
    else {
      alert("Opção inválida! Tente novamente.")
    }
    flag = 0
  }
  
  if(chute != numeroSecreto) alert(`Suas tentativas acabaram. O número secreto era ${numeroSecreto}.`)
}
