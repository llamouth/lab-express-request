const express = require("express");
const pokemon = require("./models/pokemon.json")
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})

app.get("/bugs" , (req, res) => {
    res.send(`99 little bugs in the code 99 little bugs <a href="/bugs/101">Pull one down Patch it around</a>`)
})

app.get("/bugs/:bugCount", (req, res) => {
    const { bugCount } = req.params;
    if (+bugCount > 199) {
        res.send(`Too many bugs!! Start over!`);
    } else {
        res.send(`${bugCount} little bugs in the code, ${bugCount} little bugs in the code ${bugCount} little bugs <a href="/bugs/${+bugCount + 2}">Pull one down, patch it around</a>`);
    }
});

app.get("/pokemon-pretty", (req, res) => {
    const pokeArray = pokemon.map(poke => poke.name)
    res.send(pokeArray[0])
})

app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query;
    const thePokemon = pokemon.find(poke => poke.name.toLowerCase() === name.toLowerCase())
    if(thePokemon){
        res.send([thePokemon])
    }else {
        res.send([])
    }
})

app.get("/pokemon/:index", (req, res) => {
    const {index} = req.params
    const singlePokemon = pokemon[+index]
    if(singlePokemon) {
        res.send(singlePokemon)
    }else {
        res.send(`Sorry, no pokemon found at ${index}`)
    }
})

app.get("/:verb/:adj/:noun", (req, res) => {
    const { verb, adj, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adj}-${noun}!`)
})

module.exports = app;