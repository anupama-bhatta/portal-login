function generateLogin(form) {
    var inputFirstName = document.getElementById("txtFirstName");
    var inputLastName = document.getElementById("txtLastName");
    var inputMiddleName = document.getElementById("txtMiddleName");
    var inputDob = document.getElementById("txtDob");

    if (form.checkValidity()) {
        //generate login
        var login = getLogin(inputFirstName.value, inputMiddleName.value, inputLastName.value);

        //generate password
        var password = getPassword(inputFirstName.value, inputLastName.value, inputDob.value);

        //display login info
        displayLogin(login, password);

    } else { //form did not pass validation

        //show error messages
        validate(inputFirstName, "errorFirstName");
        validate(inputLastName, "errorLastName");
        validate(inputDob, "errorDob");
    }
}

function validate(control, errorID) {
    var errorLabel = document.getElementById(errorID);
    if (control.checkValidity()) {
        //hide error label
        errorLabel.classList.add("invisible");

        //remove red formatting
        control.classList.remove("error");
    } else {
        //show error message
        errorLabel.classList.remove("invisible");

        //style control as red
        control.classList.add("error");
    }
}

function getLogin(fname, mname, lname) {
    fname = fname.toLowerCase().trim();
    mname = mname.toLowerCase().trim();
    lname = lname.toLowerCase().trim();

    if (mname == "") {
        mname = "x";
    }

    //clean up last name
    lname = lname.replace(/'/, "");
    lname = lname.replace(/"/g, "");
    lname = lname.replace(/jr./g, "");
    lname = lname.replace(/sr./g, "");
    lname = lname.replace(/mr./g, "");
    lname = lname.replace(/ms./g, "");
    lname = lname.replace(/mrs./g, "");
    lname = lname.replace(/\./g, "");
    lname = lname.replace(/-/g, "");
    lname = lname.replace(/ /g, "");

    var login = fname.substring(0, 1) + mname.substring(0, 1) + lname;
    return login;
}

function getPassword(fname, lname, dob) {
    fname = fname.toUpperCase().trim();
    lname = lname.toUpperCase().trim();

    // var objDate = new Date(dob);
    // var m = objDate.getMonth;
    // var d = objDate.getDate;
    // var y = objDate.getYear;

    //clean up dob
    dob = dob.replace(/\./g, ""); //remove periods
    dob = dob.replace(/-/g, ""); //remove hyphens
    dob = dob.replace(/\//g, ""); //remove forward slashes

    var year = dob.substring(0, 4);
    var month = dob.substring(4, 6);
    var day = dob.substring(6, 8);
    dob = String(month) + String(day) + String(year);

    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var password = fname.substring(0, 1) + lname.substring(0, 1) + dob + randomNumber;

    return password;
}

function displayLogin(login, password) {
    var spanLogin = document.getElementById("username");
    var spanPassword = document.getElementById("password");

    spanLogin.innerHTML = login;
    spanPassword.innerHTML = password;

    document.getElementById("output").classList.remove("invisible");
}

function cleanForm() {
    var inputFirstName = document.getElementById("txtFirstName");
    var inputMiddleName = document.getElementById("txtMiddleName");
    var inputLastName = document.getElementById("txtLastName");
    var inputDob = document.getElementById("txtDob");
    var outputLogin = document.getElementById("username");
    var outputPassword = document.getElementById("password");

    inputFirstName.value = "";
    inputMiddleName.value = "";
    inputLastName.value = "";
    inputDob.value = "";
    outputLogin.innerHTML = "";
    outputPassword.innerHTML = "";

    document.getElementById("errorFirstName").classList.add("invisible");
    document.getElementById("errorLastName").classList.add("invisible");
    document.getElementById("errorDob").classList.add("invisible");

    inputFirstName.classList.remove("error");
    inputMiddleName.classList.remove("error");
    inputLastName.classList.remove("error");
    inputDob.classList.remove("error");

}