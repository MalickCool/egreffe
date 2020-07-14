const express = require("express");
const router = express.Router();

const validate = require("../../validation/caisse/insert");

const Caisse = require("../../models/Caisse");

router.post("/register" , (req, res) => {
    const { errors, isValid } = validate(req.body);

    console.log(validate(req.body))

    if(!isValid){
        return res.status(404).json(errors);
    }

    //console.log(req);

    Caisse.findOne({ code: req.body.code }).then(caisse => {
        //console.log(req);
        if(caisse){
            return res.status(400).json({ code: "Cette Caisse existe déjà "});
        }else{
            const newItem = new Caisse({
                libelle: req.body.libelle,
                code: req.body.code,
            });

            newItem
                .save()
                .then(caissee => res.json(caissee))
                .catch(err => console.log(err));
        }
    });
});


router.all("/all", (req, res) => {

    Caisse.find({}).then(caisses => {
        res.send(caisses);
    })

});

router.get("/get", (req, res) => {

    Caisse.findById(req.query.id).then(theItem => {
        res.send(theItem);
    })

});

router.post("/update", (req, res) => {

    const { errors, isValid } = validate(req.body);

    console.log(validate(req.body))

    if(!isValid){
        return res.status(404).json(errors);
    }

    Caisse.findByIdAndUpdate(
        { _id: req.body.id },
        {
            $set:{
                libelle: req.body.libelle,
                code: req.body.code
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

    Caisse.findById(req.query.id)
        .then(theItem => {
            if(theItem !== null){
                Caisse.findByIdAndRemove(theItem._id)
                .then(data => {
                    res.send("Caisse supprimée avec succès");
                })
                .catch(err => {
                    res.send("Impossible de supprimer la caisse");
                });
            }else{
                res.send("Cette caisse n'existe pas");
            }
        })
        .catch(err => console.log(err));
});

module.exports = router;