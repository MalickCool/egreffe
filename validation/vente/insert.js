const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateVente(data){
    let errors = {};

    data.nombre = !isEmpty(data.nombre) ? data.nombre : "";
    data.nom = !isEmpty(data.nom) ? data.nom : "";
    data.montant = !isEmpty(data.montant) ? data.montant : "";
    data.typereglement = !isEmpty(data.typereglement) ? data.typereglement : "";
    data.acte = !isEmpty(data.acte) ? data.acte : "";

    
    if(Validator.isEmpty(data.nombre)) {
        errors.nombre = "Champs Nombre requis";
    }

    if(Validator.isEmpty(data.nom)) {
        errors.nom = "Champs Nom requis";
    }

    if(Validator.isEmpty(data.montant)) {
        errors.montant = "Champs Mantant Payé requis";
    }

    if(Validator.isEmpty(data.typereglement)) {
        errors.typereglement = "Champs Type Reglement requis";
    }

    if(Validator.isEmpty(data.acte)) {
        errors.acte = "Champs Acte requis";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}