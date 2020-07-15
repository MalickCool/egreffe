const express = require("express");
const router = express.Router();

const validate = require("../../validation/Vente/insert");

const Vente = require("../../models/Vente");
const Actioncaisse = require("../../models/Actioncaisse");
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
                etat: 1,
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

router.get("/get", (req, res) => {

    Acte.findById(req.query.id).populate('familles').then(theActe => {
        res.send(theActe);
    })

});

router.post("/update", (req, res) => {

    const { errors, isValid } = validate(req.body);

    console.log(validate(req.body))

    if(!isValid){
        return res.status(404).json(errors);
    }

    Acte.findByIdAndUpdate(
        { _id: req.body.id },
        {
            $set:{
                libelle: req.body.libelle,
                code: req.body.code,
                typeprix: req.body.typeprix,
                prix: req.body.prix,
                familles: req.body.famille_id,
                etat: 1,
                duree: req.body.duree
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

router.get("/delete", (req, res) => {

    Acte.findById(req.query.id)
        .then(theActe => {
            if(theActe !== null){
                Acte.findByIdAndRemove(theActe._id)
                .then(data => {
                    res.send("Acte supprimée avec succès");
                })
                .catch(err => {
                    res.send("Impossible de supprimer l'acte");
                });
            }else{
                res.send("Cet acte n'existe pas");
            }
        })
        .catch(err => console.log(err));
});

module.exports = router;