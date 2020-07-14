const express = require("express");
const router = express.Router();

const validate = require("../../validation/famille/insert");

const Famille = require("../../models/Famille");

router.post("/register" , (req, res) => {
    const { errors, isValid } = validate(req.body);

    console.log(validate(req.body))

    if(!isValid){
        return res.status(404).json(errors);
    }

    //console.log(req);

    Famille.findOne({ code: req.body.code }).then(famille => {
        //console.log(req);
        if(famille){
            return res.status(400).json({ code: "Cette famille existe déjà "});
        }else{
            const newFamilly = new Famille({
                libelle: req.body.libelle,
                code: req.body.code,
            });

            newFamilly
                .save()
                .then(famille => res.json(famille))
                .catch(err => console.log(err));
        }
    });
});


router.all("/all", (req, res) => {

    Famille.find({}).then(Familles => {
        res.send(Familles);
    })

});

router.get("/get", (req, res) => {

    Famille.findById(req.query.id).then(theFamilly => {
        res.send(theFamilly);
    })

});

router.post("/update", (req, res) => {

    const { errors, isValid } = validate(req.body);

    console.log(validate(req.body))

    if(!isValid){
        return res.status(404).json(errors);
    }

    Famille.findByIdAndUpdate(
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

    Famille.findById(req.query.id)
        .then(theFamilly => {
            if(theFamilly !== null){
                Famille.findByIdAndRemove(theFamilly._id)
                .then(data => {
                    res.send("Famille supprimée avec succès");
                })
                .catch(err => {
                    res.send("Impossible de supprimer la famille");
                });
            }else{
                res.send("Cette famille n'existe pas");
            }
        })
        .catch(err => console.log(err));
});

module.exports = router;