//variables
let quiz = [];
quiz[0] = new Question("What is the first home console title that featured Waluigi as a playable character?", "Mario Tennis (Nintendo 64)", "Mario Kart 64", "Mario Party 3");
quiz[1] = new Question("Waluigi made his Mario Kart debut in the 2003 Nintendo Gamecube title 'Mario Kart: Double Dash' and has appeared in all but one of the series' subsequent Nintendo console games. Which title was he missing from? ", "Mario Kart 3DS", "Mario Kart Wii", "Mario Kart 8 (Wii U)");
quiz[2] = new Question("In Mario Party 8, what does Waluigi flaunt for his winning animation?", "A rose", "A trophy", "Nothing");
quiz[3] = new Question("In Mario Kart: Double Dash, what is the name of Waluigi's personal kart?", "Waluigi Racer", "Zipper", "Gold Mantis");
quiz[4] = new Question("Featuring in Mario Kart DS, Mario Kart 3DS, Mario Kart Tour and most recently Mario Kart 8 Deluxe, what is the name of Waluigi's self-titled race course?", "Waluigi Pinball", "Waluigi Stadium", "Waluigi Circuit");
quiz[5] = new Question("Waluigi is traditionally seen as the primary rival to which character?", "Luigi", "Mario", "Wario");
quiz[6] = new Question("What is the traditional colour of Waluigi's undershirt and headwear?", "Purple", "Green", "Yellow");
quiz[7] = new Question("Waluigi is a playable character in which of the following Super Smash Bros series entries?", "Waluigi is not a playable character in these games", "Super Smash Bros for Nintendo 3DS/Wii U", "Super Smash Bros Ultimate");
quiz[8] = new Question("In Mario Kart Tour, as part of the 2021 Halloween Tour, a variant of Waluigi was introduced as a playable character. What is the nature of this character?", "He's a Vampire", "He's a Werewolf", "He's a Zombie");
quiz[9] = new Question("As a playable character in many of the Mario Golf games, what shot trajectory has Waluigi often been associated with?", "Draw (right to left)", "Fade (left to right)", "Straight");
quiz[10] = new Question("As of November 2022, what is Waluigi's most recent home console video game appearance?", "Mario Strikers: Battle League", "Mario Party Superstars", "Mario Golf: Super Rush");

let answers = [];
let currentScore = 0;

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('quizscore').style.visibility='hidden';
    document.getElementById('tohomepage').style.visibility='hidden';
    checkRemainingQuestions();
    });   
    
//this is the structure of the question
function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
}

//ensures that the right answer, as defined in 'function Question', is not always the first displayed answer
function shuffle(o) {
	for(let j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

//generates a random question and shuffled answers on a button click
function btnProvideQuestion(randomQuestion) { 
  answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2];
  shuffle(answers);

  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];
  document.getElementById("answerC").value= answers[2];
  document.getElementById("answerC").innerHTML= answers[2];
}

//check to see if the clicked answer is the correct one
function answerA_clicked() {
  let answerA = document.getElementById("answerA").value;
  	checkAnswer(answerA);
}
function answerB_clicked() {
		let answerB = document.getElementById("answerB").value;
  checkAnswer(answerB);
}
function answerC_clicked() {
    let answerC = document.getElementById("answerC").value;
  checkAnswer(answerC);
}

//updates the correct score display
function adjustScore(isCorrect) {
  // debugger;
  if (isCorrect) {
    currentScore++;
  } else {
    currentScore+ 0;
  }
  localStorage.setItem("currentScore", currentScore); 
  document.getElementById("score").innerHTML = localStorage.getItem("currentScore");//this ensures the browser saves the score with no expiration
}

//the message that displays when you choose an answer
function checkAnswer(answer) {  
  if (answer == randomQuestion.rightAnswer) {
    audioCorrect();
    alert("Congratulations! You got it right!");
    adjustScore(true);
    checkRemainingQuestions();
  } else { 
    audioIncorrect();
    alert("That's the wrong answer. Wahhhhhh....");
    adjustScore(false);
    checkRemainingQuestions();
  }
}

//sound effect that plays with the right answer
function audioCorrect() {
  let audio = document.getElementById("rightAudio");
  audio.play();
}

//sound effect that plays with a wrong answer
function audioIncorrect() {
  let audio = document.getElementById("wrongAudio");
  audio.play();
}

//this ensures a question is generated randomly
function checkRemainingQuestions() {
  if (quiz.length > 0) {
    let randomNumber = Math.floor(Math.random()*quiz.length);
	  randomQuestion = quiz[randomNumber]; 
    quiz.splice(randomNumber, 1); //this ensures a question doesn't repeat
    btnProvideQuestion(randomQuestion);
    } else {
      document.getElementById('quiz').style.visibility='hidden';
      endQuiz();
    }
}

function endQuiz() {
  document.getElementById('quizscore').style.visibility='visible';
  document.getElementById("finalscore").innerHTML = localStorage.getItem("currentScore");
  document.getElementById('tohomepage').style.visibility='visible';
}

