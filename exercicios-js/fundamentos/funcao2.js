// Armazenando uma função numa variável
const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma(2,3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b

}
console.log(soma(2,3))

// retorno implicíto
const subtracao = (a, b) => a - b  //var, let or const | nome da var | parâmetros | function or => |
console.log(subtracao(2,3)) // console.log(function(parameters))

const imprimir2 = a => {
    console.log(a)   
}
imprimir2("Legal!")