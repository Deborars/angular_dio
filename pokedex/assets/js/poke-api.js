


const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
  const pokemon = new Pokemon()
  pokemon.name = pokeDetail.name;
  pokemon.number = pokeDetail.order;
  
  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  //desestruturação array
  const [type1] = types;

  pokemon.types = types;
  pokemon.type = type1;

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  return pokemon;
}

/*aqui dentro da propriedade do objeto pokeapi
  foi segmentada a parte que realiza o map, pois fica mai legivel
  Estamos mapeando a lista de pokemons em  requisições do detalhe dos pokemons
  e convertendo a response que ele der em json
*/
pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
      .then((response) => response.json())
      .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 10 ) =>{
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


return fetch(url)
      /**
        1 realizar a requisição na api
        2 transformar o resultado em json
        3 no jsonBody.results temos um array
        4 vamos pegar o results e transformar em um novo array com map
        5 a cada passagem no map iremos realizar uma nova requisição na pokemon.url
        6 e com o retorno já transformando o mesmo em json
        7 teremos uma nova lista com elementos em json
       */
    .then((response)=>response.json())
    .then((jsonBody)=>jsonBody.results)
    .then((pokemons)=> pokemons.map((pokeApi.getPokemonDetail)))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
}


// .catch((error) => console.error(error))