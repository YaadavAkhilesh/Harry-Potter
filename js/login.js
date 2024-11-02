function validate(){
    var emailID = document.myForm.EMail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID");
        document.myForm.EMail.focus();
        return false;
    }
    if (document.myForm.pwdd.value == "" || document.myForm.pwdd.value.length < 8) 
    {
        alert("Please enter a correct password!");
        document.myForm.pwdd.focus();
        return false;
    }
    return (true);
}