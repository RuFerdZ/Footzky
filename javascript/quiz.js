window.onload = timechecker;



var totalSeconds = 60;
var minutes = parseInt(totalSeconds / 60);
var seconds = parseInt(totalSeconds % 60);
var myTimer;

function timechecker() {
	document.getElementById("timer_heading2").innerHTML = minutes + ' min : ' + seconds + ' secs ';

	if (totalSeconds <= 0) {
		setTimeout('getScore()', 1);
		alert("Times up");
		window.location.reload();
		document.getElementById("timer_heading2").innerHTML = "Time Up";
		getScore(this.form);
	} else {
		totalSeconds = totalSeconds - 1;
		minutes = parseInt(totalSeconds / 60);
		seconds = parseInt(totalSeconds % 60);
		myTimer = setTimeout("timechecker()", 1000);


	}


}

var Questions = 10;
var Selections = 4;


var answers = new Array(10);
answers[0] = "England";
answers[1] = "1863";
answers[2] = "1930";
answers[3] = "Uruguay";
answers[4] = "Argentina";
answers[5] = "Brazil";
answers[6] = "1992";
answers[7] = "Harry Kane";
answers[8] = "France";
answers[9] = "Russia";

function getScore(form) {
	var marks = 0;
	var currentEliment;
	var currentSelection;
	var wrongAns = 0;
	var correctAns = 0;
	var ansString = "";


	for (i = 0; i < Questions; i++) {
		currentEliment = i * Selections;
		for (j = 0; j < Selections; j++) {
			currentSelection = form.elements[currentEliment + j];
			if (currentSelection.checked) {
				if (currentSelection.value == answers[i]) {

					correctAns++;
					ansString += "Your answer" + "  " + "  " + currentSelection.value + "  " + " is Correct" + "<br>" + "<br>";
					break;
				} else {
					wrongAns++;
					ansString += "Your answer" + "  " + "  " + currentSelection.value + "  " + " is Wrong" + "<br>" + "<br>";
				}

			}
		}
	}

	marks = correctAns * 2;
	marks=marks-wrongAns;
	if (marks >= 0) {
		marks = marks;
	} else {
		marks = 0;
	}



	if (marks < 4) {
		document.getElementById("results").style.backgroundColor="red";
	} else if(marks < 6){
		document.getElementById("results").style.backgroundColor="orange";
	} else if(marks < 8){
		document.getElementById("results").style.backgroundColor="yellow";
	} else if(marks < 10){
		document.getElementById("results").style.backgroundColor="pink";
	} else if(marks < 12){
		document.getElementById("results").style.backgroundColor="purple";
	} else if(marks < 14){
		document.getElementById("results").style.backgroundColor="blue";
	} else if(marks < 16){
		document.getElementById("results").style.backgroundColor="lightgreen";
	} else if(marks < 18){
		document.getElementById("results").style.backgroundColor="grey";
	} else if(marks < 20){
		document.getElementById("results").style.backgroundColor="gold";
	} else if(marks < 22){
		document.getElementById("results").style.backgroundColor="lightpink";
	}


	var correctAnswers = "";
	for (i = 1; i <= Questions; i++) {
		correctAnswers += i + ". " + answers[i - 1] + "\r\n" + "<br/>" + "<br/>";
	}

	document.getElementById("results").innerHTML += "<u>Results:</u>" + "<br>" + "<br>" + ansString + "<br>" + "<br>";
	document.getElementById("results").innerHTML += "<u>Correct Answers:</u>" + "<br>" +"<br>"+ correctAnswers + "<br>" + "<br>";
	document.getElementById("results").innerHTML += "Your Marks" + "<br>" + marks;


}