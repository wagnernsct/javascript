const valores = [7.7, 8.9, 6.3, 9.2] // Tipo de dados dinâmicos
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // Quantidade de elementos que tem no array

valores.push({id: 3}, false, null, "teste") // Adicionar novos elementos no array com "push({})"
console.log(valores)

console.log(valores.pop()) //Removar o último elemento do array com ".pop()"
delete valores[0] // Remover elemento do array
console.log(0)

console.log(typeof valores) // Exibe o tipo da variável == Object




