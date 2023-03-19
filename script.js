function startButtonFunction() {

        // Declare document body variables
        var body = document.body;
        var questionsDiv = document.querySelector(".quiz-questions");
        var revealAnswerDiv = document.querySelector(".answer")
        var saveScore = document.querySelector(".save-score")

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
        var secondsLeft = 60;
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

    
// Question 1
    function firstQuestion() {

        // Append First Question
        questionsDiv.textContent = "1. What's the correct syntax for using an id element from the HTML Page?";
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

    
// Question 2
    function secondQuestion() {
        document.querySelector(".quiz-questions").innerHTML = "";
        console.log("second")

        // Append second question
        questionsDiv.textContent = "2. What is a boolean?";
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



// Question 3    
    function thirdQuestion() {
        document.querySelector(".quiz-questions").innerHTML = "";
        console.log("third")


    // Append second question
    questionsDiv.textContent = "3. What are variables?";
    body.appendChild(questionsDiv);

    // Append Answer Buttons
     var answerA = document.createElement("button")
     answerA.textContent = "Variables are containers for storing data (storing data values).";
     questionsDiv.appendChild(answerA);
     var answerB = document.createElement("button")
     answerB.textContent = "Variables are a set of Javascript rules";
     questionsDiv.appendChild(answerB);
     var answerC = document.createElement("button")
     answerC.textContent = "Variables are a block of code designed to perform a particular task.";
     questionsDiv.appendChild(answerC);

     //Subtract 10 seconds if button selected & start next question
     answerA.addEventListener("click", function(){
     currentPoints = currentPoints + 10;
     revealAnswerDiv.textContent = "Correct! 10 points added!";
     fourthQuestion();
     })

     //Subtract 10 seconds if button selected & start next question
     answerB.addEventListener("click", function(){
     secondsLeft = secondsLeft - 10;
     timeElement.textContent = "Time Left: " + secondsLeft + " Seconds";
     revealAnswerDiv.textContent = "Wrong! 10 seconds subtracted";
     fourthQuestion();
     })

     //Add 10 points to score if button selected and start next question
     answerC.addEventListener("click", function(){
     secondsLeft = secondsLeft - 10;
     timeElement.textContent = "Time Left: " + secondsLeft + " Seconds";
     revealAnswerDiv.textContent = "Wrong! 10 seconds subtracted";
     fourthQuestion();
     })    
        

    };



// Question 4
    function fourthQuestion() {
        document.querySelector(".quiz-questions").innerHTML = "";
        console.log("fourth")

    // Append second question
    questionsDiv.textContent = "4. What is a function in Javascript?";
    body.appendChild(questionsDiv);

    // Append Answer Buttons
     var answerA = document.createElement("button")
     answerA.textContent = "A JavaScript function is a container for storing data (storing data values).";
     questionsDiv.appendChild(answerA);
     var answerB = document.createElement("button")
     answerB.textContent = "A JavaScript function is a block of code designed to perform a particular task.";
     questionsDiv.appendChild(answerB);
     var answerC = document.createElement("button")
     answerC.textContent = "A Javascript function is a code that assigns a simple value to a variable";
     questionsDiv.appendChild(answerC);

     //Subtract 10 seconds if button selected & start next question
     answerA.addEventListener("click", function(){
     secondsLeft = secondsLeft - 10;
     timeElement.textContent = "Time Left: " + secondsLeft + " Seconds";
     revealAnswerDiv.textContent = "Wrong! 10 seconds subtracted";
     fifthQuestion();
     })

     //Subtract 10 seconds if button selected & start next question
     answerB.addEventListener("click", function(){
     currentPoints = currentPoints + 10;
     revealAnswerDiv.textContent = "Correct! 10 points added!";
     fifthQuestion();
     })

     //Add 10 points to score if button selected and start next question
     answerC.addEventListener("click", function(){
     secondsLeft = secondsLeft - 10;
     timeElement.textContent = "Time Left: " + secondsLeft + " Seconds";
     revealAnswerDiv.textContent = "Wrong! 10 seconds subtracted";
     fifthQuestion();
     })    
        


    };



// Question 5
    function fifthQuestion() {
        document.querySelector(".quiz-questions").innerHTML = "";
        console.log("fifth")

    
        // Append second question
        questionsDiv.textContent = "5. Which is the best variable to use if you think that the value of the variable can change?";
        body.appendChild(questionsDiv);
    
        // Append Answer Buttons
         var answerA = document.createElement("button")
         answerA.textContent = "var";
         questionsDiv.appendChild(answerA);
         var answerB = document.createElement("button")
         answerB.textContent = "const";
         questionsDiv.appendChild(answerB);
         var answerC = document.createElement("button")
         answerC.textContent = "let";
         questionsDiv.appendChild(answerC);
    
         //Subtract 10 seconds if button selected & start next question
         answerA.addEventListener("click", function(){
         secondsLeft = secondsLeft - 10;
         timeElement.textContent = "Time Left: " + secondsLeft + " Seconds";
         revealAnswerDiv.textContent = "Wrong! 10 seconds subtracted";
         quizFinished();
         })
    
         //Subtract 10 seconds if button selected & start next question
         answerB.addEventListener("click", function(){
         secondsLeft = secondsLeft - 10;
         timeElement.textContent = "Time Left: " + secondsLeft + " Seconds";
         revealAnswerDiv.textContent = "Wrong! 10 seconds subtracted";
         quizFinished();
         })
    
         //Add 10 points to score if button selected and start next question
         answerC.addEventListener("click", function(){
         currentPoints = currentPoints + 10;
         revealAnswerDiv.textContent = "Correct! 10 points added!";
         quizFinished();
         })    
            
    
    };






// Save Scores
    function quizFinished() {
        document.querySelector(".quiz-questions").innerHTML = "";
        console.log("quiz completed");
        
        saveScore.textContent = "Would you like to save your score?"
        body.appendChild(saveScore);
        //Display Final Score
        questionsDiv.textContent = "Final Score: " + currentPoints;
        body.appendChild(questionsDiv);

    }



    });

    





};
startButtonFunction()