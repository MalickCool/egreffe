const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const keys = require("../../config/config");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateUserInfoUpdate = require("../../validation/updateInfo");

const User = require("../../models/User");

router.post("/register" , (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    console.log(validateRegisterInput(req.body))

    if(!isValid){
        return res.status(404).json(errors);
    }

    //console.log(req);

    User.findOne({ code: req.body.code }).then(user => {
        //console.log(req);
        if(user){
            return res.status(400).json({ code: "Ce Code existe déjà "});
        }else{
            const newUser = new User({
                name: req.body.name,
                code: req.body.code,
                password: req.body.password,
                fonction: req.body.fonction,
                niveau: req.body.niveau,
                etat: 1
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});


router.post("/login", (req, res) => {


    const { errors, isValid } = validateLoginInput(req.body);

    if(isValid){
        //return res.status(400).json(errors);
    }


    const code = req.body.code;
    const password = req.body.password;

    User.findOne({ code }).then(user => {

        if(!user){
            return res.status(400).json({ emailnotfound: "Cet Utilisateur n'existe pas dans notre Base de Données"});
        }else{
            bcrypt.compare(password, user.password).then(isMatch => {
                if(isMatch){
                    const payload = {
                        id: user.id,
                        name: user.name,
                        code: user.code,
                        niveau: user.niveau
                    };
    
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {
                            expiresIn: 31556926
                        },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        }
                    );
                } else {
                    return res
                        .status(400)
                        .json({ password: "Mot de Passe Incorrecte" });
                }
            });
        }

        
        
    });
});

router.all("/all", (req, res) => {

    User.find({}).then(Users => {
        res.send(Users);
    })

});

router.get("/get", (req, res) => {

    User.findById(req.query.id).then(user => {
        res.send(user);
    })

});

router.get("/updateInfos", (req, res) => {

    const { errors, isValid } = validateUserInfoUpdate(req.body);

    console.log(validateUserInfoUpdate(req.body))

    if(!isValid){
        return res.status(404).json(errors);
    }

    User.findByIdAndUpdate(
        { _id: "5f0d9eaa211ca809a824de98" },
        {
            $set:{
                name: req.body.name,
                fonction: req.body.fonction,
                niveau: req.body.niveau,
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