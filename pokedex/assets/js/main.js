
function covertPokemonTypesTolist(pokemonTypes){
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}


function convertPokemonToLi(pokemon){
  return `
        <li class="pokemon">
          <span class="number">#0${pokemon.order}</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
              ${covertPokemonTypesTolist(pokemon.types).join('')}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}" srcset="">
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


