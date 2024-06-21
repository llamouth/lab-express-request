const express = require("express");
const cors = require('cors');
const pokemon = require("../models/pokemon.json")
const {generatePokemonNameString, generatePokemon} = require("../utils/serverHelpers.js")
const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

app.get("/pokemon", (req, res) => {
    res.json(pokemon)
})

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query;
    const thePokemon = pokemon.find(poke => poke.name.toLowerCase() === name.toLowerCase())
    if(thePokemon){
        res.json([thePokemon])
    }else {
        res.json([])
    }
})

app.get("/pokemon/:index", (req, res) => {
    const {index} = req.params
    const singlePokemon = pokemon[+index]
    if(singlePokemon) {
        res.json(singlePokemon)
    }else {
        res.json(`Sorry, no pokemon found at ${index}`)
    }
})

module.exports = app;