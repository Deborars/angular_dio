


function convertPokemonToLi(pokemon){
  return `
        <li class="pokemon ${pokemon.type}">
          <span class="number">#0${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
              ${pokemon.types.map((type)=> `<li class="type ${type}">${type}</li>`).join("")}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}" srcset="">
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


