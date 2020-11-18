var cheesetype = prompt("is de kaas geel?");

if(cheesetype.toLowerCase() == "ja"){
	var holes = prompt("zitten er gaten in?");
	if (holes.toLowerCase() == "ja"){
		var price = prompt("Is de kaas belachelijk duur?");
		if(price.toLowerCase() == "ja"){
			alert("Emmenthaler");
		}
		else{
			alert("Leerdammer");
		}
	}
	else{	
		var stone = prompt("Is de kaas hard als steen?");
		if(stone.toLowerCase() == "ja"){
			alert("Pamigiano Reggiano");
		}
		else{
			alert("Goudse Kaas");
		}
	}
}

else {
	var fungus = prompt("Heeft de kaas blauwe schimmels?");
	
	if (fungus.toLowerCase() == "ja") {
	
		var crust = prompt("Heeft de kaas een korst?");
		
		if (crust.toLowerCase() == "ja"){
			alert("Bleu de Rochbaron");
		}
		else{
			alert("Foume d'Ambert");
		}
	}
	else {
		var nocrust = prompt("heeft de kaas een korst?");
		
		if (nocrust.toLowerCase() == "ja"){
			alert("Camembert");
		}
		else{
			alert("Mozzarella");
		}
		
	}
}