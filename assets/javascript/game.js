$(document).ready(function(){

//results
var wins = 0
var losses = 0

var counter = 0

//random number between 19 and 120
var randomNumber = Math.round(Math.random() * (120-19+1) + 19);


//random number between 1 and 12 for each image
var square = Math.round(Math.random() * (12-1+1) + 1);

var pear = Math.round(Math.random() * (12-1+1) + 1);

var rounded = Math.round(Math.random() * (12-1+1) + 1);

var eye = Math.round(Math.random() * (12-1+1) + 1);


//displays random number
$("#random-number").text(randomNumber);






//when image clicked display random number
// $("#square").on("click", function() 




//at start of game
var restart = function() {

randomNumber = Math.round(Math.random() * (120-19+1) + 19);

$("#random-number").text(randomNumber);


square = Math.round(Math.random() * (12) + 1);

pear = Math.round(Math.random() * (12) + 1);

rounded = Math.round(Math.random() * (12) + 1);

eye = Math.round(Math.random() * (12) + 1);

counter = 0;
$("#score").html("0");


}



//if statements
var rules = function() {
 if (counter === randomNumber){
 	$("#result").html("You Win!!");
	wins++;
	$("#wins").text(wins);
	
	restart();


 }

else if (counter > randomNumber){
	$("#result").html("You Lose!!");
	losses++;
	$("#losses").text(losses);
	
	restart();

}


}

//when each image clicked
$("#square").on("click", function() {

counter = counter + square;

$("#score").text(counter);

rules();

console.log(square);
})

$("#pear").on("click", function() {

counter = counter + pear;

$("#score").text(counter);

rules();

})


$("#rounded").on("click", function() {

counter = counter + rounded;

$("#score").text(counter);

rules();

})

$("#eye").on("click", function() {

counter = counter + eye;

$("#score").text(counter);

rules();

})




// //when image clicked display random number
// $("#square").on("click", function() {

// counter = counter + square;

// rules ();


// })

// //computer choosing a random number..but this is javascript..is this ok???//

// //var minTargetNumber = 19;
// var maxTargetNumber = 120;

// // var counter = 0;

// var randomNumber = randomNumberFromRange(minTargetNumber, maxTargetNumber);

// function randomNumberFromRange (min,max) {
// 	return Math.round(Math.random() * (max-min+1) + min);

// }

// $("#random-number").text(randomNumber);


//  //Number option applied to each crystal image//







// for (var i = 0; i < diamondNumber.length; i++) {

// $(".diamond-image").attr("data-diamondValue", 
 
//  }

// $(".diamond-image").on("click", function() {


// var diamondValue = ($(this).attr("data-diamondValue"));
// diamondValue = parseInt(diamondValue);


// counter += diamondValue;


// alert("your number is" + counter);


// })




});











