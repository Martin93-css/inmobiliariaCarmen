const fs = require("fs");
const path = require("path");


const controller = {
    index: (req , res) => {
        res.render('index')
    },
    alquileres: (req , res) => {
        res.render('alquileres')
    },
    ventas: (req , res) => {
        res.render('ventas')
    },
    terrenos: (req , res) => {
        res.render('terrenos')
    },
}


module.exports = controller;