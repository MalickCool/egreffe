const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data){
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.fonction = !isEmpty(data.fonction) ? data.fonction : "";
    data.niveau = !isEmpty(data.niveau) ? data.niveau : "";

    
    if(Validator.isEmpty(data.name)) {
        errors.name = "Champs Nom requis";
    }

    if(Validator.isEmpty(data.fonction)) {
        errors.fonction = "Champs Fonction requis";
    }

    if(Validator.isEmpty(data.niveau)) {
        errors.niveau = "Champs Niveau requis";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}