function startButtonFunction() {

        // Declare document body variables
        var body = document.body;
        var questionsDiv = document.querySelector(".quiz-questions");
        var revealAnswerDiv = document.querySelector(".answer")

        // Create start button element & append
        var startButton = document.createElement("button");
        startButton.textContent = "Start Quiz";
        questionsDiv.appendChild(startButton);

        //add event listener to start quiz
        startButton.addEventListener("click", function() {
        //disappear start button once quiz starts
        document.querySelector(".quiz-questions").innerHTML = ""
        // Declare time and points element
        var timeElement = document.querySelector(".time");
        var secondsLeft = 120;
        var pointsElement = document.querySelector(".points");
        var currentPoints = 0;

        // Start Timer & Display Points
        var timerInterval = setInterval(function(){
        secondsLeft--;
        timeElement.textContent = "Time Left: " + secondsLeft + " Seconds";
        pointsElement.textContent = "Score: " + currentPoints;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }

        }, 1000);
        firstQuestion();


    function firstQuestion() {

        // Append First Question
        questionsDiv.textContent = "What's the correct syntax for using an id element from the HTML Page?";
        body.appendChild(questionsDiv);
        // Append Answer Buttons
        var answerA = document.createElement("button")
        answerA.textContent = ".GetElementId";
        questionsDiv.appendChild(answerA);
        var answerB = document.createElement("button")
        answerB.textContent = ".GrabElementById";
        questionsDiv.appendChild(answerB);
        var answerC = document.createElement("button")
        answerC.textContent = ".GetElementById";
        questionsDiv.appendChild(answerC);

        //Subtract 10 seconds if button selected & start next question
        answerA.addEventListener("click", function(){
        secondsLeft = secondsLeft - 10;
        timeElement.textContent = "Time Left: " + secondsLeft + " Seconds";
        revealAnswerDiv.textContent = "Wrong! 10 seconds subtracted"
        secondQuestion()
        })

        //Subtract 10 seconds if button selected & start next question
        answerB.addEventListener("click", function(){
        secondsLeft = secondsLeft - 10;
        timeElement.textContent = "Time Left: " + secondsLeft + " Seconds";
        revealAnswerDiv.textContent = "Wrong! 10 seconds subtracted"
        secondQuestion()
        })

        //Add 10 points to score if button selected and start next question
        answerC.addEventListener("click", function(){
        currentPoints = currentPoints + 10;
        revealAnswerDiv.textContent = "Correct! 10 points added!"
        secondQuestion()
        })

    };

    

    function secondQuestion() {
        document.querySelector(".quiz-questions").innerHTML = "";
        console.log("question 2")

        // Append second question
        questionsDiv.textContent = "What is a boolean?";
        body.appendChild(questionsDiv);

        // Append Answer Buttons
         var answerA = document.createElement("button")
         answerA.textContent = "A binary variable, having two possible values called “true” and “false.”";
         questionsDiv.appendChild(answerA);
         var answerB = document.createElement("button")
         answerB.textContent = "A sequence of characters treated as a single piece of data";
         questionsDiv.appendChild(answerB);
         var answerC = document.createElement("button")
         answerC.textContent = "A display or range of a particular type of thing";
         questionsDiv.appendChild(answerC);
 
         //Subtract 10 seconds if button selected & start next question
         answerA.addEventListener("click", function(){
         currentPoints = currentPoints + 10;
         revealAnswerDiv.textContent = "Correct! 10 points added!";
         thirdQuestion();
         })
 
         //Subtract 10 seconds if button selected & start next question
         answerB.addEventListener("click", function(){
         secondsLeft = secondsLeft - 10;
         timeElement.textContent = "Time Left: " + secondsLeft + " Seconds";
         revealAnswerDiv.textContent = "Wrong! 10 seconds subtracted";
         thirdQuestion();
         })
 
         //Add 10 points to score if button selected and start next question
         answerC.addEventListener("click", function(){
         secondsLeft = secondsLeft - 10;
         timeElement.textContent = "Time Left: " + secondsLeft + " Seconds";
         revealAnswerDiv.textContent = "Wrong! 10 seconds subtracted";
         thirdQuestion();
         })

    };

    function thirdQuestion() {
        document.querySelector(".quiz-questions").innerHTML = "";
        console.log("third")
    }

    });



};
startButtonFunction()