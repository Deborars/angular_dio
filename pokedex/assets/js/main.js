

function convertPokemonToLi(pokemon){
  return `
        <li class="pokemon">
          <span class="number">#001</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
              <li class="type">grass</li>
              <li class="type">poison</li>
            </ol>
            <img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}" srcset="">
          </div>
      </li>
`
}

pokeApi.getPokemons().then((pokemons = [])=>{

  const newList = pokemons.map((pokemon)=>{
    return convertPokemonToLi(pokemon);
  })

  //o join pega um array e transforma em uma string por default ele separa por virgula
//ai foi colocado sem espacos para ficar sem separador nenhum
  const newHTML = newList.join('');

  document.querySelector("#pokemonList").innerHTML += newHTML;


})
.catch((error)=>console.log(error))


