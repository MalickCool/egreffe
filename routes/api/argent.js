const express = require("express");
const router = express.Router();


const Argent = require("../../models/Argent");

router.post("/register" , (req, res) => {
    //console.log(req);
    const newItem = new Argent({
        valeur: req.body.valeur,
        typee: req.body.typee,
    });

    newItem
        .save()
        .then(item => res.json(item))
        .catch(err => console.log(err));
});


router.all("/all", (req, res) => {

    Argent.find({}).then(item => {
        res.send(item);
    })

});

router.get("/get", (req, res) => {

    Argent.findById(req.query.id).then(theItem => {
        res.send(theItem);
    })

});

router.get("/getByType", (req, res) => {

    Argent.find({ 'typee': req.query.typee }).then(theItem => {
        res.send(theItem);
    })

});

router.post("/update", (req, res) => {

    Argent.findByIdAndUpdate(
        { _id: req.body.id },
        {
            $set:{
                valeur: req.body.valeur,
                typee: req.body.typee
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