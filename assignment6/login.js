function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

window.onload = loginLoad;
function loginLoad()
{
	var parameter = getParams();
	console.log(parameter["username"]);
	console.log(parameter["password"]);
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin()
{
	var parameter = getParams();
    var User = document.forms["myLogin"]["username"].value;
	var Pass = document.forms["myLogin"]["password"].value;

	if(parameter["username"]==User && Pass==parameter["password"])
	{
		return true;
	}
	else if(parameter["username"]==User && Pass!==parameter["password"])
	{
		alert("Wrong Password");
		return false;
	}
	else{
		alert("Wrong Username or Password");
		return false;
	}
}

			