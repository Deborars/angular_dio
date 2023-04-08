
const pokemonList = document.querySelector("#pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton")
const limit =  5;
let offset = 0;




function loadPokemonItens(offset, limit){

    pokeApi.getPokemons(offset, limit).then((pokemons = [])=>{

      const newList = pokemons.map((pokemon)=>{
        return  `
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
      })

      //o join pega um array e transforma em uma string por default ele separa por virgula
    //ai foi colocado sem espacos para ficar sem separador nenhum
      const newHTML = newList.join('');

      pokemonList.innerHTML += newHTML;


    })

}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () =>{
  offset += limit;
  loadPokemonItens(offset, limit);
})



