
 export const errors = [
    {fullname: ""}
]

const test1 = (name) => {

}

export function validInput (value, type) {
    
    let regexText = /^[a-zA-Zéêï.\s-]*$/,
        regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,3}$/,
        regexAlpha = /^[a-zA-Z0-9\s-]*$/,
        regexTel = /^[0-9]*$/,
        regexPassword = /^[a-z]+[A-Z]+[0-9]+[#*\s-_à.@]*$/,
        empty_msg = "Ce champs est obligatoire...",
        size_value = "Ce champs est trop court...",
        format_invalid = "Format invalide...";

    if (type == "fullname") {
        if (!value) {
            errors.fullname = empty_msg 
        } else if (value.length < 3) {
            errors.fullname = size_value
        } else if (!regexText.test(value)) {
            errors.fullname = format_invalid
        } else {
            errors.fullname = ""
        }
    } 
    else if (type == "firstname") {
        if (!value) {
            errors.firstname = empty_msg 
        } else if (value.length < 3) {
            errors.firstname = size_value
        } else if (!regexText.test(value)) {
            errors.firstname = format_invalid
        } else {
            errors.firstname = ""
        }
    }  
    else if (type == "lastname") {
        if (!value) {
            errors.lastname = empty_msg 
        } else if (value.length < 3) {
            errors.lastname = size_value
        } else if (!regexText.test(value)) {
            errors.lastname = format_invalid
        } else {
            errors.lastname = ""
        }
    }
    else if (type == "company") {
        if (!value) {
            errors.company = empty_msg
        } else if (value.length < 3) {
            errors.company = size_value
        } else if (!regexAlpha.test(value)) {
            errors.company = format_invalid
        } else {
            errors.company = ""
        }
    }
    else if (type == "email") {
        if (!value) {
            errors.email = empty_msg
        } else if (!regexEmail.test(value)) {
            errors.email = format_invalid
        } else {
            errors.email = ""
        }
    } 
    else if (type == "country") {
        if (!value) {
            errors.country = empty_msg
        } else {
            errors.country = ""
        }
    }
    else if (type == "tel") {
        if (!value) {
            errors.tel = empty_msg
        } else if (value.length < 6) {
            errors.tel = size_value
        } else if (!regexTel.test(value)) {
            errors.tel = format_invalid
        } else {
            errors.tel = ""
        }
    }
    else if (type == "password") {
        if (!value) {
            errors.password = empty_msg
        } else if (value.length < 6) {
            errors.password = size_value
        } else if (!regexPassword.test(value)) {
            errors.password = "Au moins un caractère majuscule et minuscule, un chiffre et un signe "
        } else {
            errors.password = ""
        }
    }
}