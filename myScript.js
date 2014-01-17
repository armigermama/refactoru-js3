
/* 
Phone number validation
*/

var phoneNumber = prompt("Enter your phone number in the format of xxx-xxx-xxxx:");
if ( phoneNumber.length === 12 && 
		phoneNumber.charAt(3) === "-" && 
		phoneNumber.charAt(7) === "-" ) {
	alert("Thank you!");
	} else {
	alert("Please following the formate of xxx-xxx-xxxx.");
	};
	

/* 
Birth day validation
*/

var birthDay = prompt("Enter your birth day in the format of MM/DD/YY:");
if ( birthDay.length === 8 && 
		birthDay.charAt(2) === "/" && 
		birthDay.charAt(5) === "/" ) {
	alert("Thank you!");
	} else {
	alert("Please following the formate of MM/DD/YY.");
	};


// /* 
// Postal code validation
// */

var zipCode = prompt("Enter your postal code in the format of xxxxx or xxxxx-xxxx.");
if (zipCode.length === 5 || 
	( zipCode.length === 10 && zipCode.charAt(5) === "-" )) {
	alert("Thank you!");
	} else {
	alert("Please following the formate of xxxxx or xxxxx-xxxx.");
	};
 
// State abbreviation validation


var stateAbrev = prompt("Enter your postal code in the format of XX");
if (stateAbrev.length === 2 && 
	stateAbrev === stateAbrev.toUpperCase() ) {
	alert("Thank you!");
	} else {
	alert("Please following the formate of XX.");
	};

// // /* 
// // Marital validation
// // */


var marital = prompt("Are you married? Please answer yes or no.");
if (marital.toUpperCase() === "YES" ||  marital.toUpperCase() === "NO" ) {
	alert("Thank you!");
	} else {
	alert("Please answer yes or no.");};

	