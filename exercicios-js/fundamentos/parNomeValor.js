// par nome/valor

const saudacao = "opa" // Contexto léxico 1 

function exec(){
    const saudacao = "Falaa" // Contexto léxico 2 
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro", 
    iddade: 32, 
    peso: 90, 
    endereco: {
        logradouro: "Rua Adailton Jorge",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)