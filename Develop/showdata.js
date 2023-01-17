var scorelistE1 = document.querySelector("#score-list");
var buttonE1 = document.querySelector("#goback");
var buttonE2 = document.querySelector("#clearscores");

var quiztakers = [];

function showScores() {
    scorelistE1.innerHTML = "";
    const players = Object.keys(localStorage);

    for (var k = 0; k < players.length; k++) {
      var score = localStorage.getItem(players[k]);
  
      var li = document.createElement("li");
      li.textContent = `${players[k]} - ${score}`;
      li.setAttribute("data-index", k);
  
      scorelistE1.appendChild(li);
    }
  }
  
  function init() {
  
    // if (thetakers !== null) {
    //   quiztakers = thetakers;
    // }
  
    showScores();
  }
  
  // function storeTakers() {
  //   localStorage.setItem("quiztakers", JSON.stringify(quiztakers));
  // }
  
  buttonE1.addEventListener("click", function(event) {
    event.preventDefault();

    window.location.href='index.html';
})
  
buttonE2.addEventListener("click", function(event) {
    event.preventDefault();

    localStorage.clear();
})
 
  
  // Calls init to retrieve data and render it to the page on load
  init();
  