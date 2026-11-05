

function javaEnabled()
{
document.getElementById("addhere").innerHTML=("Java enabled: " + navigator.javaEnabled());

}

function displayDate() // this function does get  called atm, was attempting to give newly created an id or class name
{
	//document.getElementById("demo").innerHTML=Date(); 	 
	// var l = document.getElementById("addhere");
	//time.className="blogTime";
	
	
	var newP = document.createElement('P');   	  			   	 		// create paragrah
	newP.value = Date()+ "</br>"; 			  	  	 					// set inner HTML as the date
	newP.setAttribute('id','blogTime');      	 	   					// give new tag an id
	
	
	//var time = newP.innerHTML ;Date() 
	//return newP;        				  		 						// return right result
}		   

// creates a new list element, and concats name, date, and input to it.
function addLiElement()
{
 	var l = document.getElementById("addhere");
	
	var newLi = document.createElement('LI');
	
	newLi.innerHTML="<br/>" + displayUserName() + "<br/>" + Date() + "<br/>" + userInput();                      // the input test should go here
	
	l.appendChild(newLi);
	
}

// get input from page, not working atm.
function userInput()
{
 var input =document.getElementById("inputmessage").value;
 return input;
}


// promts user to enter a name.
function displayUserName()
{		 
	
var name=prompt("Please enter your name","Harry Potter");

// if (name!=null && name!="") { document.write("Hello " + name + "! How are you today?")  }

return name;
}



// This function can be used to validate before our content gets sent. 
function validate()
{
	var isValidate=true;
	
	var name = document.getElementById('name').value;
	var password1 = document.getElementById('password').value;
	
	var passwordpattern =/[0-9]/;
	var numberedPass =passwordpattern.test(password1);
	
	var retype = document.getElementById('retype').value;
	var email = document.getElementById('email').value;
	
	var emailpattern = new RegExp("@");
	var emailpattern1 = new RegExp(".com");
	var isvalid =emailpattern1.test(email);
	var isvalid =emailpattern.test(email);
	
	var age = document.getElementById('age').selectedIndex;
	
	var sexm = document.getElementById('sexm').checked;
	var sexf = document.getElementById('sexf').checked;
	var term = document.getElementById('term').checked;
	
	var debugging =false;
	var errormessage ="well done";
	
	if(!term) { errormessage="have not accepted the terms" ; isValidate=false;}
	
	
	if(sexm|sexf) { }
	else { errormessage="sex was not selected"; isValidate=false;}

	if(!age >= 1) { errormessage="age was not selected!" ; isValidate=false;}

	if(!email.length > 6) { errormessage ="email is too short.." ; isValidate=false;}

	if(!isvalid) { errormessage =" email pattern is incorrect.." ; isValidate=false;}

	if(!retype == password1) { errormessage =" re-password is not the same!"; isValidate=false;}

	if(!numberedPass){ errormessage ="password does'nt contain any numbers"; isValidate=false;}
	
	if(password1.length <=6 ){ errormessage ="password is too short" ;isValidate=false; }

	if(name.length <3 ) { errormessage ="name not entered"; isValidate=false; }
		
	alert(errormessage);
	
	// If Validation shows there is a problem return false
	return isValidate;
}

function checkFormDetails()
{
var message="user is allow to blog";
	var isvalidate; // =validate();
	if(isvalidate)
	{
	// alert(message);
	}
	else
	{  var message="user is not validate"; 
	 //  alert(message);
	}

} 


window.onload = init;

function init() 
{
	
	document.getElementById("myForm").onsubmit=validate;              // validates when they press the button
	
	
}

