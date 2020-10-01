var x;
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

// Set Background color to the inptus.
function changeColor() {
	
    // The Bigger input value will get green Background.
    if (input1.value > input2.value) {
        input1.style.backgroundColor = '#1bed18';

    } else if (input2.value > input1.value) {
        input2.style.backgroundColor = '#1bed18';
    }
	
    // The Smaller Input value will Get Red Background.
    if (input1.value < input2.value) {
        input1.style.backgroundColor = '#ed183c';

    } else if (input2.value < input1) {
        input2.style.backgroundColor = '#ed183c';
    }
	
	// If the Inputs values Equale Thy Both will Get Pink Background.
    if (input1.value == input2.value) {
        input1.style.backgroundColor = '#eda1e3';
	    input2.style.backgroundColor = '#eda1e3';
    }
}

// Reaplce Values Between the Inputs.
function ChangeNum() {
	// will get the input1 value.
    x = input1.value;
	// Reaplce Input1 value with input2
    if(input1.value !=input2.value){
		input1.value = input2.value;
	}
	// replace Input2 with input1
	if (input2.value == input1.value){
		input2.value = x;
	}
}




