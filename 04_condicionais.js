// [x] Criar lista de destinos
// [x] Vender um destino somente para comprador maior de 18
// [x] Comprador menor de idade mostar mensagem
// [x] Exibir lista de destino atulizaddos 
// [] verificar se o comparador está acompanhado
// [] Se acompanhado pode vender

console.log("Trabalhando com condicionais")
const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
)
const idadeComprador = 17
const estaAcompnhado = true

console.log("Lista de destinos disponiveis")
console.log(listaDeDestinos)

if (idadeComprador >= 18 || estaAcompnhado) {

    console.log(`O comprador tem ${idadeComprador} anos ou está companhado`)
    console.log(`O destino selecionado foi ${listaDeDestinos[1]}`)
    listaDeDestinos.splice(1, 1)

} else {
    console.log(`O comprador tem ${idadeComprador} anos ou não está acompanhado. Então não posso vender`)
}


console.log('Lista de destinos atualizada')
console.log(listaDeDestinos)