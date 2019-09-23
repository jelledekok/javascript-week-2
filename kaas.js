var geel = prompt('is de kaas geel?');

if (geel == 'ja'){
	var gaten = prompt('heeft de kaas gaten?');

	if (gaten == 'ja'){

		var geld = prompt('is de kaas heel duur?');
		if (geld = 'ja'){
			alert('de kaas is een emmenthaler')
		}
		else{
			alert('de kaas is een leerdammer')
		}
	}

	else{
	var steen = prompt('is de kaas zo hard als steen?');
	if (steen == 'ja'){
		alert('de kaas is een pamigiano regiano');
		}	
		else{
		alert('de kaas is een goudse kaas');
		}
	}
}
else{
	var schimmel = prompt('heeft de kaas blauwe schimmels');
	if (schimmel == 'ja'){
		var korstja = prompt('heeft de kaas een korst');
		if (korstja == 'ja'){
			alert('de kaas is een bleu de ruchbaron' );
		}
		else{
			alert('de kaas is een foume d ambert');
		}
	}
		else{
	var korstnee = prompt('heeft de kaas een korst');
	if (korstnee == 'ja'){
		alert('de kaas is een camembert');
	}
	else{
		alert('de kaas is een mozzarella');
	}
	}
}
	
		
	



