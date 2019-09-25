alert('a wild creeper popped up!!');
var vraag1 = prompt('creeper!?');
if (vraag1 == 'aw man'){
	alert('the creeper is pleased with your knowledge.');
	alert('the creeper wants to hug you!');
	var vraag3 = prompt('A.accept B.reject');
	if (vraag3.toLowerCase() == 'b'){
		alert('the creeper accepted your opinion.');
		alert('where is a creeper made of');
		var vraag6 = prompt('A.plants B.a lot of tnt');
		if (vraag6.toLowerCase() == 'a'){
			alert('the creeper GROWS respect for you');
			alert('the creeper has has one last question for you');
			alert('how do you get a music disk?');
			var vraag10 = prompt('A.from creepers B.from zombies');
			if (vraag10.toLowerCase() == 'a'){
						alert('the creeper is pleased and gives you something');
						alert('you get a music disk congratulations!!');
					}
					else{
						alert('the creeper is disapointed but gives you mercy');
						alert('congratulations you survived!!');
					}
		}
		else{
			alert('the creeper is angry and prepears to attack');
			alert('you attack the creeper what kind of weapon do you use');
			var vraag9 = prompt('A.encanted sword B.encanted tridant');
				if (vraag9.toLowerCase() =='a'){
					alert('you killed the creeper, MURDERER!!')
					alert('congratulations you survived')
				}
				else{
					alert('the trident hit and lightning striked the creeper');
					alert('the creeper mutated into an charged creeper');
					alert('the creeper blows up');
					alert('you died');
				}
			}

	}
	else{
    alert('the creeper is going to end youre whole career');
    alert('the creaper exploded in youre face');
    alert('you died very disapointing you did well')
}
}else{
	alert('no inteligence found')
	alert('lets try again')
	var vraag2 = prompt('swinging pickaxe from ...');
		if (vraag2 == 'side to side'){
			alert('so you do have culture?');
			alert('the creeper gives you one last chance');
			alert('how do you make fireworks');
			var vraag5 = prompt('A.paper and tnt B.paper and gunpowder C.lether and tnt');
				if (vraag5.toLowerCase() == 'b'){
					alert('you make a firework and fly away with your elytra');
					alert('congratulations you survived');
				}
				else{
					alert('the creeper got so bored it atacked');
					var vraag8 = prompt('what are your last words');
					if (vraag8 =='i will never forget those eyes eyes eyes'){
						alert('i see youre a man of culture as well');
						alert("the creeper gives you mercy");
						alert('you died but you lived!!');
					}
					else{
						alert('the creeper blew you up');
						alert('you died');
					}
				}
		}
		else{
			alert('thats a shame');
			alert('the creeper prepears to atack');
			var vraag4 = prompt('A.run B.fight to death');
				if (vraag4.toLowerCase() == 'a'){
					alert('but you cant run from a creeper');
					var vraag8 = prompt('what are your last words');
						if (vraag8 =='i will never forget those eyes eyes eyes'){
							alert('i see youre a man of culture as well');
							alert("the creeper gives you mercy");
							alert('you died but you lived!!');
						}
						else{
						alert('the creeper blew you up');
						alert('you died');
						}

				}
				else{
					alert('the creaper blows you of a clif into the lava');
				}

	}
}