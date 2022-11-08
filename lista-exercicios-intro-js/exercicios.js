// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturaRetangulo = prompt("Informe a altura do retângulo!")
  const larguraRetangulo = prompt("Informe a largura do retângulo!")
  console.log(alturaRetangulo * larguraRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Informe o ano atual!")
  const anoNascimento= prompt("Informe seu ano de nascimento!")
  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Informe seu nome!")
  const idade = prompt("Informe sua idade!")
  const email = prompt("Informe seu email!")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Informe sua cor favorita!")
  const cor2 = prompt("Informe sua segunda cor favorita!")
  const cor3 = prompt("Informe sua terceira cor favorita!")
  
  const coresFavoritas = [cor1, cor2, cor3]

  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimo = array[array.length - 1]
  return ultimo
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const first = array[0]
  const last = array[array.length - 1]

  array.pop()
  array.shift()

  array.push(first)
  array.unshift(last)

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() == string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = prompt(Number("Insira o ano atual!"))
const anoNascimento = prompt(Number("Insira o ano em que você nasceu!"))
const anoCarteira = prompt(Number("Insira o ano em que sua carteira de identidade foi emitida!"))

const idade = anoAtual - anoNascimento
const carteira = anoAtual - anoCarteira

  const precisaRenovar = idade <= 20 && carteira >= 5 || idade > 20 && idade < 50 && carteira >= 10 || idade > 50 && carteira >= 15

  console.log(precisaRenovar)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

const anoBi = ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)
return anoBi
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const idade = prompt("Você tem mais de 18 anos?")
const medioCompleto = prompt("Você possui ensino médio completo?")
const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

const apto = (idade === "sim" && medioCompleto === "sim" && disponibilidade === "sim")

console.log(apto)

}