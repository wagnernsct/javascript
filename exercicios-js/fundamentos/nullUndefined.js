let valor 
console.log(valor)

valor = null // ausência de valor
// console.log(valor.toString()) // Erro!!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atrubuir undefined
console.log(!!produto.preco) // convertando para booleano 
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

