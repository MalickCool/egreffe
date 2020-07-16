const express = require("express");
const router = express.Router();
const moment = require('moment');

const validate = require("../../validation/Vente/insert");

const Vente = require("../../models/Vente");
const Acte = require("../../models/Acte");

router.post("/register" , (req, res) => {
    const { errors, isValid } = validate(req.body);

    console.log(validate(req.body))

    if(!isValid){
        return res.status(404).json(errors);
    }

    //console.log(req);

    Acte.findOne({ _id: req.body.acte }).then(acte => {
        //console.log(req);
        if(acte){
            const newVente = new Vente({
                nombre: req.body.nombre,
                nom: req.body.nom,
                montant: req.body.montant,
                typereglement: req.body.typereglement,
                acte: req.body.acte,
                actioncaisse: req.body.actioncaisse,
                etat: 0,
                pu: req.body.pu
            });

            newVente
                .save()
                .then(vente => res.json(vente))
                .catch(err => console.log(err));
        }else{
            return res.status(400).json({ code: "Cet acte n'existe pas"});
        }
    });
});


router.all("/all", (req, res) => {

    Vente.find({}).populate("acte").populate("actioncaisse").then(ventes => {
        res.send(ventes);
    })

});

router.all("/todaySells", (req, res) => {

    const today = moment().format("YYYY-MM-DD");

    Vente.find({ datevente: today }).populate("acte").populate("actioncaisse").then(ventes => {
        res.send(ventes);
    })

});

router.get("/sellsByActioncaisse", (req, res) => {

    Vente.find({ actioncaisse: req.query.idac }).populate("acte").populate("actioncaisse").then(ventes => {
        res.send(ventes);
    })

});

router.get("/getSolde", (req, res) => {
    Vente.find({ actioncaisse: req.query.idac }).then(function (ventes){
        let somme = 0;
        ventes.forEach(function(vente){
            somme += vente.montant;
        })
        res.status(200).send((somme).toString());
    })
});

router.get("/get", (req, res) => {

    Vente.findById(req.query.id).populate('acte').then(theVente => {
        res.send(theVente);
    })

});

router.get("/annuler", (req, res) => {

    const { errors, isValid } = validate(req.body);

    console.log(validate(req.body))

    if(!isValid){
        return res.status(404).json(errors);
    }

    Vente.findByIdAndUpdate(
        { _id: req.query.id },
        {
            $set:{
                etat: 1
            }
        },
        {new:true},
        function(err, result) {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        }
      );

});

module.exports = router;