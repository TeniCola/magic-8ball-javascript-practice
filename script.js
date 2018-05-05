$(document).ready(function(){
 	
    var magic8Ball = {};
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];
	$("#answer").hide();
	 
    magic8Ball.askQuestion = function(question){
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
       	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
		$("#8ball").effect("shake");
		$("#answer").text(answer);
        console.log(question);
        console.log(answer);
		$("#answer").fadeIn(4000);
    };
 
    var onClick = function() {
		$("#answer").hide();
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
		setTimeout(
     	   function() {
          		var newQuestion = prompt("Ask the Magic 8-Ball a Yes/no question!");
			    magic8Ball.askQuestion(newQuestion);
		   }, 500);
    };
 
    $("#questionButton").click(onClick);
 
});