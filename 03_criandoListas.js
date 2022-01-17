console.log(`Trabalhando com listas`);


// [] criar uma lista
//      [] cria a lista utilizando a sintaxe new Array
//      [] cria a lista com os []
//      [] adiconar um elemento dentro da lista com push

const listaDeDestinos = new Array (
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
)
console.log(listaDeDestinos)

//Adicionando um elemento na lista
listaDeDestinos.push(`Curitiba`)
console.log("Lista com elementos adicionado apos ser inicializado",listaDeDestinos)

console.log("Removendo elementos")

listaDeDestinos.splice(1,2)

console.log('Removendo um elemento dentro da lista(Array)', listaDeDestinos)



console.log("Exibindo um unico elmeneto")

console.log(listaDeDestinos[1])