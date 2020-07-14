const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateFamille(data){
    let errors = {};

    data.libelle = !isEmpty(data.libelle) ? data.libelle : "";
    data.code = !isEmpty(data.code) ? data.code : "";

    
    if(Validator.isEmpty(data.libelle)) {
        errors.libelle = "Champs Libellé requis";
    }

    if(Validator.isEmpty(data.code)) {
        errors.code = "Champs Code Famille requis";
    }


    if (!Validator.isLength(data.code, { min: 3, max: 10})) {
        errors.code = "Le Code Famille doit contenir au moins 3 charactères";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}