function startButtonFunction() {
    // Declare document body variable
var body = document.body;
var questionsDiv = document.querySelector(".quiz-questions");


    var startButton = document.createElement("button");
    startButton.textContent = "Start Quiz";
    questionsDiv.appendChild(startButton);

startButton.addEventListener("click", function() {
    document.querySelector(".quiz-questions").innerHTML = ""
    var timeElement = document.querySelector(".time");
    var secondsLeft = 60;
    // Start Timer
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeElement.textContent = "Time Left: " + secondsLeft + " Seconds";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);



    // Append Quiz Title
    var quizTitle = document.createElement("h1");
    quizTitle.textContent = "JavaScript Quiz";
    body.appendChild(quizTitle);
    firstQuestion();

function firstQuestion() {

    // Append First Question
    questionsDiv.textContent = "lsfkabavvnwepionj awmpaivomwpoivno  eiowvnsobcnwioj ioabavpobaenw ";
    body.appendChild(questionsDiv);
    // Append Buttons
    var answerA = document.createElement("button")
    answerA.textContent = "Answer A ";
    questionsDiv.appendChild(answerA);
    var answerB = document.createElement("button")
    answerB.textContent = "Answer B";
    questionsDiv.appendChild(answerB);
    var answerC = document.createElement("button")
    answerC.textContent = "Answer C";
    questionsDiv.appendChild(answerC);

    //Subtract 10 seconds if button selected & start question 2
    answerA.addEventListener("click", function(){
        secondsLeft = secondsLeft - 10;
        timeElement.textContent = "Time Left: " + secondsLeft + " Seconds";
        secondQuestion()
    })

    //Subtract 10 seconds if button selected & start question 2
    answerB.addEventListener("click", function(){
        secondsLeft = secondsLeft - 10;
        timeElement.textContent = "Time Left: " + secondsLeft + " Seconds";
        secondQuestion()
    })

    //Add 10 points to score and start question 2
    answerC.addEventListener("click", function(){
        secondQuestion()
    })

};

function secondQuestion() {
    document.querySelector(".quiz-questions").innerHTML = ""
    console.log("question 2")

    // Append First Question
    questionsDiv.textContent = "new question";
    body.appendChild(questionsDiv);
}



});
}
startButtonFunction()