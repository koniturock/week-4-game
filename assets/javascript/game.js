// Global Variables
//------------------------------------


//Crystal Variables
var crystal = {
	black:
	{
		name: "Black",
		value: 0
	},
	green:
	{
		name: "Green",
		value: 0
	},
	purple:
	{
		name: "Purple",
		value: 0
	},
	red:
	{
		name: "Red",
		value: 0
	},
};
//scores (current and Target)
var currentScore	= 0;
var targetScore		= 0;

// Wins and Losses
var winCount	= 0;
var lossCount	= 0;

//Functions
//-------------------------------------

//
var getRandom = function(min, max){
	return Math.floor(Math.random() * (max + min + 1)) + min;
}

// Starts the game (and restarts the game)
var startGame = function(){

// Reset the Current Score
currentScore = 0;

//Set a new Target Score (between 19 and 120)
targetScore = getRandom(19, 120);
//Set different values for each of the crystals (between 1 and 12)

crystal.black.value 	= getRandom(1, 12);
crystal.green.value 	= getRandom(1, 12);
crystal.purple.value 	= getRandom(1, 12);
crystal.red.value 		= getRandom(1, 12);



//change the HTML to reflect all of these changes
$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore);

// testing cosole
console.log("---------------------")
console.log("Target Score: " + targetScore);
console.log("Black: " + crystal.black.value + " | Green: " + crystal.green.value + " | Purple: " + crystal.purple.value + " | Red: " + crystal.red.value);
console.log("---------------------")


}

// Respond to clicks on clicks on the crystals
var addValues = function(crystal){
	currentScore = currentScore + crystal.value;

	// Change the HTML to reflect changes in current Scores
	$("#yourScore").html(currentScore);

	//call the checkwin function
	checkWin();

	// Testing console
	console.log("Your Score: " + currentScore);

}


//check if user won or lost and reset the game
var checkWin = function(){

	//check if currentScore is longer than targetScore
	if(currentScore > targetScore){
		alert("Sorry. You Lost!");
		console.log("You Lost");

	// Add to Loss Counter
	lossCount++;

	//change Loss count HTML
	$("#lossCount").html(lossCount);

	//Restart the game
	startGame();

	}

	else if (currentScore == targetScore){
		alert("Congratulations! You Won!");
		console.log("You Won!");

	// Add to the Win Counter
	winCount++;

	//change win count html
	$("#winCount").html(winCount);

	//restart the game
	startGame();
	}

}

//Main Process
//--------------------------------------

// Starts the game
startGame();

$("#black").click(function() {
	addValues(crystal.black);
});

$("#green").click(function() {
	addValues(crystal.green);
});

$("#purple").click(function() {
	addValues(crystal.purple);
});

$("#red").click(function() {
	addValues(crystal.red);
});


