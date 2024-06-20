const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello People")
})

app.get("/bugs" , (req, res) => {
    res.send(`99 little bugs in the code \n 99 little bugs \n <a href="/bugs/101">Pull one down \n Patch it aound</a>`)
})

app.get("/bugs/:bugCount" , (req, res) => {
    const { bugCount } = req.params
    if(+bugCount >= 199) {
        res.send(`${bugCount} little bugs in the code \n ${bugCount} little bugs \n <a href="/bugs">Pull one down \n Patch it aound</a>`)
    }else {
        res.send(`${bugCount} little bugs in the code \n ${bugCount} little bugs \n <a href="/bugs/${+bugCount + 2}">Pull one down \n Patch it aound</a>`)
    }
})

app.get("/:verb/:adj/:noun", (req, res) => {
    const { verb, adj, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adj}-${noun}!`)
})

module.exports = app;