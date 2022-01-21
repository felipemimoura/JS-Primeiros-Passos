// [] Criar lista de destinos
// [] Vender um destino somente para comprador maior de 18
// [] Comprador menor de idade mostar mensagem
// [] Exibir lista de destino atulizaddos 

console.log("Trabalhando com condicionais")
const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
)
const idadeComprador = 18

console.log("Lista de destinos disponiveis")
console.log(listaDeDestinos)

if (idadeComprador >= 18) {
    console.log(`O comprador tem ${idadeComprador} anos e pode comprar`)
    console.log(`O destino selecionado foi ${listaDeDestinos[1]}`)
    listaDeDestinos.splice(1, 1)
} else {
    console.log(`O comprador tem ${idadeComprador} anos e não posso vender`)
}


console.log('Lista de destinos atualizada')
console.log(listaDeDestinos)