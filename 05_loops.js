console.log("Trabalhando com loops")
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)
const idadeComprador = 17
const estaAcompnhado = true
const destino = 'São Paulo'

console.log("Lista de destinos disponiveis")
console.log(listaDeDestinos)

const podeComprar = idadeComprador >= 18 || estaAcompnhado

let contador = 0
let destinoExiste = false
while (contador < listaDeDestinos.length) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true
        break
    }

    contador++
}

console.log(`O destino existe: ${destinoExiste}`)