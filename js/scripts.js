//this is back end logic
var add = function (number1,number2){
	return number1 + number2;
};
var subtract = function (number1,number2){
	return number1 - number2;
};
var multiply= function (number1,number2){
	return number1 * number2;
};

var divide = function (number1,number2){
	return number1 / number2;
};

//this if front end logic
		var number1=parseInt($("#add1").val());
		var number2=parseInt($("#add2").val());
	  alert(add(number1, number2));
});
	/*var number1=parseFloat(prompt("Enter number one"));
	var number2=parseFloat(prompt("Enter number two"));
		alert(subtract(number1, number2));

	var number1=parseFloat(prompt("Enter number one"));
	var number2=parseFloat(prompt("Enter number two"));
		alert(multiply(number1, number2));

	var number1=parseFloat(prompt("Enter number one"));
	var number2=parseFloat(prompt("Enter number two"));
	alert(divide(number1, number2));
