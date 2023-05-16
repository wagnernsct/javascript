// Var - tem escopo global e de função

{
    {
        {
        
            {
            
                {
    {var sera = "Será???"} // Fora de função, a variável "sera" é visível fora do bloco
                }
            }
        }
    }
}

console.log(sera)

function teste (){ // Sendo uma função, dentro de um escopo de uma function, ela só é visível 
    var local = 123 //dentro da function
    console.log(local)
} 
teste()
