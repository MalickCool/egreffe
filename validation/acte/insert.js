const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateActe(data){
    let errors = {};

    data.libelle = !isEmpty(data.libelle) ? data.libelle : "";
    data.code = !isEmpty(data.code) ? data.code : "";

    data.typeprix = !isEmpty(data.typeprix) ? data.typeprix : "";
    data.prix = !isEmpty(data.prix) ? data.prix : "";
    data.famille_id = !isEmpty(data.famille_id) ? data.famille_id : "";
    data.duree = !isEmpty(data.duree) ? data.duree : "";

    
    if(Validator.isEmpty(data.libelle)) {
        errors.name = "Champs Libellé requis";
    }

    if(Validator.isEmpty(data.code)) {
        errors.code = "Champs Code Famille requis";
    }

    if (!Validator.isLength(data.code, { min: 2, max: 10})) {
        errors.password = "Le Code Famille doit contenir au moins 3 charactères";
    }

    if(Validator.isEmpty(data.typeprix)) {
        errors.typeprix = "Champs Type Prix requis";
    }

    if(Validator.isEmpty(data.prix)) {
        errors.prix = "Champs Prix requis";
    }

    if(Validator.isEmpty(data.famille_id)) {
        errors.famille_id = "Champs Famille requis";
    }

    if(Validator.isEmpty(data.duree)) {
        errors.duree = "Champs Durée requis";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}