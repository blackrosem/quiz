var timerE2 = document.getElementById('countdowntwo');
var labelE5 = document.getElementById('thescore');
var infoE1 = document.querySelector("#initials");
var buttonE1 = document.querySelector("#submitit");
let params = new URLSearchParams(document.location.search);
let timeLeft = params.get("finaltime");
timerE2.textContent="Time: "+ timeLeft;
labelE5.textContent="Your final score is " + timeLeft;
buttonE1.addEventListener("click", function(event) {
    event.preventDefault();

    var player = {
        playername: infoE1.value.trim(),
        playerscore: timeLeft
    };

//    localStorage.setItem(player.playername, JSON.stringify(player.playerscore));
    localStorage.setItem(player.playername, player.playerscore);
    window.location.href='showdata.html';
})