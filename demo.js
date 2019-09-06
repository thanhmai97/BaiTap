document.getElementById("show").innerHTML = "0.00";

function tinh(){
	var bill = 0, people = 0, tip = 0, sum;
	bill = document.getElementById("getBill").value;
	tip = document.getElementById("getTip").value;
	people = document.getElementById("getPeople").value;
	sum = ((bill/100)*tip)/people;
	var mai = sum.toString();
    document.getElementById("show").innerHTML = mai;
}
