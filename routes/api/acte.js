const express = require("express");
const router = express.Router();

const validate = require("../../validation/acte/insert");

const Acte = require("../../models/Acte");
const Famille = require("../../models/Famille");

router.post("/register" , (req, res) => {
    const { errors, isValid } = validate(req.body);

    console.log(validate(req.body))

    if(!isValid){
        return res.status(404).json(errors);
    }

    //console.log(req);

    Acte.findOne({ code: req.body.code }).then(acte => {
        //console.log(req);
        if(acte){
            return res.status(400).json({ code: "Cet acte existe déjà "});
        }else{
            Famille.findById( req.body.famille_id ).then(famille => {
                if(famille){
                    const newActe = new Acte({
                        libelle: req.body.libelle,
                        code: req.body.code,
                        typeprix: req.body.typeprix,
                        prix: req.body.prix,
                        familles: req.body.famille_id,
                        etat: 1,
                        duree: req.body.duree
                    });

                    newActe
                        .save()
                        .then(acte => res.json(acte))
                        .catch(err => console.log(err));

                }else{
                    return res.status(400).json({ libelle: "Cette famille n'existe pas"});
                }
            })
            .catch(err => console.log(err));
        }
    });
});


router.all("/all", (req, res) => {

    Acte.find({}).populate('familles').then(Familles => {
        res.send(Familles);
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