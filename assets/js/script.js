//Wait for the DOM to finish loading before running the game

//Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button'); //grab all the buttons and store them in a variable

    for(let button of buttons){  // loop through the HTML collection and on each iteration attatch a click event listener
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type') === 'submit'){  // check the value of the datatype attribute on the element that triggered the event
                alert('You clicked Submit');                    // if its submit, then alert you clicked
            } else {
                let gameType = this.getAttribute('data-type');  //else you clicked, either, multiply, divide, subtract, or addition 
                runGame(gameType);                         
            }
        });
    }
    runGame('addition');
});

/* This is a docstring, if you hover over the function call it will show this description of what the function does*/ 
/**
 * The main game loop, called when the script is loaded and
 * after the users answer has been processed.
 */
function runGame(gameType){
    //Generate a random number between 1 and 25, 0 would create problems for division.
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

    if(gameType === 'addition'){
        displayAdditionQuestion(num1, num2);
    }else{
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`
    }
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';

}

function displaySubtractQuestion(){
    
}

function displayMultiplyQuestion(){
    
}

function displayDivisionQuestion(){
    

}

