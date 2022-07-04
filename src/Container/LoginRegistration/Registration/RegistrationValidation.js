const validateRigistration = (fields, applyCheck = false) => {
    let errors = {};
    let formIsValid = true;


    if (!fields["name"] || fields["name"].trim() === '') {
        formIsValid = false;
        errors["name"] = "*Please enter your name.";
    }
    
    if (!fields["email"] || fields["email"].trim() === '') {
        formIsValid = false;
        errors["email"] = "*Please enter your email.";
    }

    if (typeof fields["email"] !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
            formIsValid = false;
            errors["email"] = "*Please enter valid email.";
        }
    }

    if (!fields["password"] || fields["password"].trim() === '') {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
    }
    else if (fields["password"].length < 4) {
        formIsValid = false;
        errors["password"] = "*please enter minimum 5 character";
    }

    if (!fields["confirm_password"] || fields["confirm_password"].trim() === '') {
        formIsValid = false;
        errors["confirm_password"] = "*Please enter your password.";
    }
    else if (fields["confirm_password"].length < 4) {
        formIsValid = false;
        errors["confirm_password"] = "*please enter minimum 5 character";
    }
    
    if (fields["confirm_password"] !== fields["password"]) {
        formIsValid = false;
        // errors["password"] = "*password and confirm password are not match";
        errors["confirm_password"] = "*password and confirm password are not match";
    }  

    return {
        errors : errors,
        formIsValid : formIsValid
    };
}

export default validateRigistration;