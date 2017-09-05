$(document).ready(function(){
var targetNumber =Math.floor(Math.random() *101+19)

	$('#targetNumber').html("Target Number : <br>" + targetNumber + "<br>");

	var num1= Math.floor(Math.random()*11+1)
	var num2= Math.floor(Math.random()*11+1)
	var num3= Math.floor(Math.random()*11+1)
	var num4= Math.floor(Math.random()*11+1)

	var wins= 0;
	var loss= 0;
	var userTotal = 0;

	$('#wins').html("Wins :" + wins);
	$('#losses').html("Losses :" + loss);
	$('#userTotal').html("Score : <br>" + userTotal);


	function reset(){
		targetNumber=Math.floor(Math.random()*101+19);
		console.log(targetNumber)
		$('#targetNumber').html("Target Number: " +targetNumber);
		num1= Math.floor(Math.random()*11+1);
		num2= Math.floor(Math.random()*11+1);
		num3= Math.floor(Math.random()*11+1);
		num4= Math.floor(Math.random()*11+1);
		num5= Math.floor(Math.random()*11+1);
		userTotal= 0;
		$('#userTotal').html("Score: " + userTotal);
	}

	function win(){
		alert("You win!");
		wins++;
		$('#wins').html("Wins: " + wins);
		reset();
	}

	function losses(){
		alert("You lose. Try again?");
		loss++;
		$('#losses').html("Losses: " + loss);
		reset();
	}

	$('#one').on ('click', function(){
		userTotal = userTotal + num1;
			console.log("New userTotal= " + userTotal);
		$('#userTotal').html("Score: " + userTotal);
			if (userTotal === targetNumber){
			win();
			}
			else if (userTotal>targetNumber){
			console.log("inside elseif userTotal>targetNumber")
			losses();
			}
	})

	$('#two').on ('click', function(){
		userTotal = userTotal + num2;
			console.log("New userTotal= " + userTotal);
		$('#userTotal').html("Score: " + userTotal);
			if (userTotal === targetNumber){
			win();
			}
			else if (userTotal>targetNumber){
			losses();
			}
	})

	$('#three').on ('click', function(){
		userTotal = userTotal + num3;
			console.log("New userTotal= " + userTotal);
		$('#userTotal').html("Score: " + userTotal);
			if (userTotal === targetNumber){
			win();
			}
			else if (userTotal>targetNumber){
			losses();
			}
	})

	$('#four').on ('click', function(){
		userTotal = userTotal + num4;
			console.log("New userTotal= " + userTotal);
		$('#userTotal').html("Score: " + userTotal);
					if (userTotal === targetNumber){
			win();
			} else if (userTotal>targetNumber){
			losses();
				}
	})

	$('#five').on ('click', function(){
		userTotal = userTotal + num5;
			console.log("New userTotal= " + userTotal);
		$('#userTotal').html("Score: " + userTotal);
				if (userTotal === targetNumber){
			win();
			} else if ( userTotal>targetNumber){
				losses();
				}
	});
});