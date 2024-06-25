const display = document.getElementById("display");

//function to show display
function appendToDisplay(input) {
    display.value += input; 
}

//function to clear the display
function clearDisplay() {
    display.value = "";
}

//function to calculate or throw error when incomplete equations
function calculate() {
    try {
        display.value = eval(display.value); 
    }
    catch(error) {
        display.value = "ErRoR";
    }
}