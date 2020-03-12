window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}
function validateForm() 
{
    var FName = document.forms["myForm"]["firstname"].value;
    var Pass = document.forms["myForm"]["password"].value;
    var RePass = document.forms["myForm"]["repassword"].value;
    var error = document.getElementById("errormsg");
    if(Pass == RePass)
    {
        alert("Hello "+(FName));
        return true;
    }
    else
    {
       error.innerText = "repassword not matching password"
    }
    return false;
}