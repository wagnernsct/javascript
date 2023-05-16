const escola = "Cod3r"

console.log(escola.charAt(4)) // Pega o indice da palavra "Cod3r e retorna a letra "r"
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //Pegar indice da tabela unicode e retorna "51"
console.log(escola.indexOf("3")) 

console.log(escola.substring(1)) // od3r
console.log(escola.substring(0,3)) //Cod

console.log("Escola".concat(escola).concat("!")) //Concatenação de Strings  "EscolaCod3r!""
console.log("Escola"+ escola + "!")

console.log(escola.replace(3, "e")) //Substitue "3" por "e"

console.log("Ana, Maria, Pedro".split(",")) // Função split(), gera um array



