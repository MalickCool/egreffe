const express = require("express");
const router = express.Router();
const moment = require('moment');

const Caisse = require("../../models/Caisse");
const User = require("../../models/User");
const Actioncaisse = require("../../models/Actioncaisse");



router.post("/open" , (req, res) => {

    const today = moment().format("YYYY-MM-DD");
    
    Actioncaisse.findOne({ dateouverture: today }).then(actioncaisse => {
        if(actioncaisse){
            return res.status(400).json({ code: "Cette caisse à déjà été ouverte"});
        }else{
            const newItem = new Actioncaisse({
                dateouverture: req.body.dateouverture,
                solde: req.body.solde,
                etat: req.body.etat,
                commentaire: req.body.commentaire,
                caisse: req.body.caisse,
                user: req.body.user
            });

            newItem
                .save()
                .then(item => res.json(item))
                .catch(err => console.log(err));
        }
    })
    .catch(err => console.log(err));
});

router.post("/reopen" , (req, res) => {

    const today = moment().format("YYYY-MM-DD");
    
    Actioncaisse.findOne({ dateouverture: today })
        .then(actioncaisse => res.json(actioncaisse))
        .catch(err => console.log(err));
});


router.all("/all", (req, res) => {

    Actioncaisse.find({}).populate('caisse').populate('user').then(Action => {
        res.send(Action);
    })

});

router.get("/get", (req, res) => {

    Actioncaisse.findById(req.query.id).populate('caisse').populate('user').then(theAC => {
        res.send(theAC);
    })

});

router.post("/arreter", (req, res) => {

    Actioncaisse.findByIdAndUpdate(
        { _id: req.body.id },
        {
            $set:{
                solde: req.body.solde,
                commentaire: req.body.commentaire,
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