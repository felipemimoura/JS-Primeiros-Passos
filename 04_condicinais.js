console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `Sao Paulo`, `Rio de Janeiro`);

// Somenete vender para um cliente maior que 18 anos
// [x] Verificar se o comprado é maior de idade
// [x] se maior de idade vender um item
// [x]  Remover um item
// [x] Se não for maior de idade não vender

// [] Verificar se está acompanhada
// [] Pode comprar
// [] Não pode comprar

console.log("Destinos Possiveis");
console.log(listaDeDestinos);

const idadeComprador = 15;
const estaAcompanhada = true;

if (idadeComprador >= 18) {
  console.log("Comprador maior de idade");
  listaDeDestinos.splice(1, 1);
} else if (estaAcompanhada) {
  console.log("Comprador está acompanhado");
  listaDeDestinos.splice(1, 1);
} else {
  console.log("comprador não é maior de idade");
}

console.log(listaDeDestinos);
