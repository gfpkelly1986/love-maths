//Wait for the DOM to finish loading before running the game

//Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button'); //grab all the buttons and store them in a variable
    
    for(let button of buttons){  // loop through the HTML collection and on each iteration attatch a click event listener
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type') === 'submit'){  // check the value of the datatype attribute on the element that triggered the event
                alert('You clicked Submit');                    // if its submit, then alert you clicked
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}`);              //else you clicked, either, multiply, divide, subtract, or addition 
            }
        });
    }
});


function runGame(){

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}

function displayDivisionQuestion(){

}

