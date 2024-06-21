const generatePokemonNameString = (pokemon) => {
    const pokeArray = pokemon.map(poke => poke.name)
    let resultStr = "<h1> Pokemon List </h1> <br>"
    for(let i = 0; i < pokeArray.length; i++){
        if(i === pokeArray.length - 1){
            resultStr += `<a href="/pokemon-pretty/${i}">${pokeArray[i]}</a>`
        }else {
            resultStr += `<a href="/pokemon-pretty/${i}">${pokeArray[i]}</a> <br>`
        }
    }
    return resultStr
}

const generatePokemon = (thePokemon) => {
    const { name, img, misc } = thePokemon
    return `<img src=${img}> <br> <h1>${name}</h1> <br> <p>height: ${misc.height},</p> <br> <p>happiness: ${misc.happiness}%</p>`
}

module.exports = {generatePokemonNameString, generatePokemon}