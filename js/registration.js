function validate() {
    if (document.myForm.ffname.value == "") {
        prompt("Please provide your first name!","Harry Potter");
        document.myForm.ffname.focus();
        return false;
    }
    if (document.myForm.llname.value == "") {
        confirm("Please provide your last name!");
        document.myForm.llname.focus();
        return false;
    }
    if (document.myForm.pwdd.value == "") {
        alert("Please provide your password!");
        document.myForm.pwdd.focus();
        return false;
    }
    if (document.myForm.pwdd.value.length < 8) {
        alert("Your password must be 8 digits long!");
        document.myForm.pwdd.focus();
        return false;
    }
    if (document.myForm.pwdd1.value == "" || document.myForm.pwdd1.value.length < 8) {
        alert("Your confirm password must be as same as previous password!");
        document.myForm.pwdd1.focus();
        return false;
    }
    if (document.myForm.state.value == "-1") {
        alert("Please select your state!");
        document.myForm.state.focus();
        return false;
    }
    if (document.myForm.mobno.value == "" || isNaN(document.myForm.Zip.value)
        || document.myForm.mobno.value.length != 10) 
    {
        alert("Please provide mobile number in this format ##########.");
        document.myForm.mobno.focus();
        return false;
    }
    return (true);
}