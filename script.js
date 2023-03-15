var startButton = document.querySelector('#start-quiz');
var timeElement = document.querySelector(".time");
var secondsLeft = 60;

startButton.addEventListener("click", function() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeElement.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
});