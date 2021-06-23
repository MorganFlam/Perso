const buttons = document.querySelectorAll(".choiceBtn");

console.log(buttons);

function gameOn(e) {

    var play = e.srcElement.id;
    var computerChoice = Math.random();
    
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    var compare = function(choice1,choice2) {
        if (choice1 === choice2) {
            return "it's a tie!";
        }
        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                // rock wins
                return "you win!";
            } else {
                // paper wins
                return "you lose! Try again.";
            }
        }
        if (choice1 === "paper") {
            if (choice2 === "rock") {
                // paper wins
                return "you win!";
            } else {
                // scissors wins
                return "you lose! Try again.";
            }
        }
        if (choice1 === "scissors") {
            if (choice2 === "rock") {
                // rock wins
                return "you lose! Try again.";
            } else {
                // scissors wins
                return "you win!";
            }
        }
    };

    // Run the compare function
    var results = compare(play,computerChoice);


// Display results
document.write("You played " + play + ", and I played " + computerChoice + " so " + results + "<br><br>");
var btn = document.createElement("button");
btn.innerHTML = "Play again";

var body = document.getElementsByTagName("body")[0];
body.appendChild(btn);

btn.addEventListener ("click", function() {
    location.reload();
  });
}
    

buttons.forEach(button => button.addEventListener ('click', gameOn));