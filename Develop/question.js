var timerE1 = document.getElementById('countdown');
var questionE1 = document.getElementById('thequestion');
var answerE1 = document.getElementById('a');
var answerE2 = document.getElementById('b');
var answerE3 = document.getElementById('c');
var answerE4 = document.getElementById('d');
var labelE1 = document.getElementById('alabel');
var labelE2 = document.getElementById('blabel');
var labelE3 = document.getElementById('clabel');
var labelE4 = document.getElementById('dlabel');

var notificationE1 = document.getElementById('notification');
var timeLeft = 90;
var getSelectedValue = document.querySelector( 'input[name="answer"]:checked');
var startpoint = 0;
var finaltime = 0;

var elements = [
    {
      "question": "Commonly used data types DO Not Include",
      "answers": [
        "1. strings",
        "2. booleans",
        "3. alerts",
        "4. numbers"
      ],
      "correct": "c"
    },
    {
      "question": "The condition in an if/else statement is enclosed with _____",
      "answers": [
        "1. quotes",
        "2. curly brackets",
        "3. parentheses",
        "4. square brackets"
      ],
      "correct": "b"
    },
    {
      "question": "Arrays in JavaScript can be used to store _____",
      "answers": [
        "1. numbers and strings",
        "2. other arrays",
        "3. booleans",
        "4. all of the above"
      ],
      "correct": "d"
    },
    {
      "question": "String values must be enclosed within _____ when being assigned to variables",
      "answers": [
        "1. commas",
        "2. curly brackets",
        "3. quotes",
        "4. parentheses"
      ],
      "correct": "c"
    },
    {
      "question": "A very useful tool used during development and debugging for printing content to the debugger is: ",
      "answers": [
        "1. JavaScript",
        "2. terminal/bash",
        "3. for loops",
        "4. console log"
      ],
      "correct": "d"
    }
  ]

  function countdown() {
    var timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
          timerE1.textContent = timeLeft + ' seconds remaining';
          timeLeft--;
        }  else {
          timerE1.textContent = '';
          clearInterval(timeInterval);
        }
      }, 1000);
    }

    function askQuestions() {
        for(var k = 0; k <= 4; k++) {
          questionE1.textContent = elements[startpoint].question;
          labelE1.textContent = elements[startpoint].answers[0];
          labelE2.textContent = elements[startpoint].answers[1];
          labelE3.textContent = elements[startpoint].answers[2];
          labelE4.textContent = elements[startpoint].answers[3];
          }
    }

    function checkAnswer() {
        var answergiven = '';
        if(document.getElementById('a').checked) {   
          answergiven = 'a';
        }   
        else if(document.getElementById('b').checked) {   
          answergiven = 'b';
        }   
        else if(document.getElementById('c').checked) {   
          answergiven = 'c';
        }   
      else if(document.getElementById('d').checked) {   
          answergiven = 'd';
        }  
      else {   
          answergiven = '';
        }
        if(answergiven == elements[startpoint].correct) {
          notificationE1.textContent = "Correct!";
        }
        else{
          notificationE1.textContent = "Wrong!"
          timeLeft -= 10;
        }
        startpoint++;
        if(startpoint < 5){
          askQuestions();
        }
        else{
          finaltime = timeLeft;
          window.location.href=`enterdata.html?finaltime=${finaltime}`;
        //  timerE2.textContent='Time: '+ finaltime;
      
        }
        document.getElementById(answergiven).checked = false;
      }

    countdown();
    askQuestions();

