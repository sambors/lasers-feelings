function createCharacter(){
	// Selecting the input element and get its value 
	var characterStyle = document.getElementById("characterStyle").value;
	var characterRole = document.getElementById("characterRole").value;
	var characterLFNumber = document.getElementById("characterLFNumber").value;
	var characterName = document.getElementById("characterName").value;
	           
	// Displaying the value
	console.log(characterStyle,characterRole,characterLFNumber,characterName);

	document.getElementById("myCharacter").innerHTML = characterName;
	document.getElementById("myStyle").innerHTML = characterStyle + " " + characterRole;
	// document.getElementById("myRole").innerHTML = characterRole;
	// document.getElementById("myLFNumber").innerHTML = characterLFNumber;
	document.getElementById("LF-bar").children[characterLFNumber - 1].id="myLFNumber";
	// document.getElementById("myLFNumber").style.gridColumnStart = characterLFNumber;

	document.getElementById("character-create").style.display = 'none';
	document.getElementById("character-card").style.display = 'grid';
	document.getElementById("gameplay-area").style.display = 'grid';
}

function rollDice(n){
	var result = [];
	// var n=2;

	//roll n dice
	for(var i=0;i<n;i++){
		result.push( Math.floor( Math.random() * 6 ) +1 )
	}
	return result;
}

function rollOne(){
	var rollresult = rollDice(1);
	var field = document.getElementById('roll-one-result');
	field.style.backgroundColor = "";
	field.style.color = "#000";
	field.innerHTML = rollresult;
	if(rollresult == characterLFNumber.value){
		console.log("laserfeelings!");
		field.style.backgroundColor = "#007DAC";
		field.style.color = "#fff";
	}
}

function rollTwo(){
	document.getElementById('roll-two-result').innerHTML = rollDice(2);
}

function rollThree(){
	document.getElementById('roll-three-result').innerHTML = rollDice(3);
}