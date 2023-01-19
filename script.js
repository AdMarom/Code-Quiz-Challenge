
var buttonElement = document.getElementById("start-quiz");
var quizQuestions = document.getElementById("quiz-questions");

var startQuiz = function() {
    var startButton = document.createElement("button");
    var buttonText = document.createTextNode("Start Quiz");
    startButton.appendChild(buttonText);
    buttonElement.appendChild(startButton);
    return;
};

var appendQuestions = function() {
    var questionTitle = document.createElement("h2");
    var questionAnswer = document.createElement("p");
    var answerButton = document.createElement("button");

    var questionTitleOne = document.createTextNode("What is xyz?");
    var questionAnswerOne = document.createTextNode("answer");
    var answerButtonOne = document.createTextNode("Next Question");


    
    quizQuestions.appendChild(questionTitle);
    quizQuestions.appendChild(questionAnswer);
    quizQuestions.appendChild(answerButton);

    questionTitle.appendChild(questionTitleOne);
    questionAnswer.appendChild(questionAnswerOne);
    answerButton.appendChild(answerButtonOne);

    answerButton.addEventListener('click', appendQuestionsTwo);
}

var appendQuestionsTwo = function() {
    console.log("test");

};

startQuiz()
buttonElement.addEventListener('click', appendQuestions);

