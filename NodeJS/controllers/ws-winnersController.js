//Librerias, Controladores
const express = require("express"); //Libreria para poder hacer uso del framework express.js
var router = express.Router();
var { WS_Winner } = require("../models/ws-winners");

//Se obtiene toda la informacion almacenada en la base de datos
router.get('/', (req, res) => {
    WS_Winner.find((err,docs) => {
        if (!err) { res.send(docs); }
        else { console.log("ERROR: Couldn't retrive data from database :" + JSON.stringify(err,undefined,2));  }
    });
});

//Carga de datos a la base
router.post('/', (req,res) => {
    var win = new WS_Winner({
        year: req.body.year,
        winner: req.body.winner,
        runnerup: req.body.runnerup,
        result: req.body.result,
        mvp: req.body.mvp,
    });
    win.save((err,doc) =>{
        if (!err) { res.send(doc); }
        else { console.log("ERROR: Couldn't save data into database :" + JSON.stringify(err,undefined,2));  }
    });
});

module.exports = router;