var myQuestions = [
    {
      question: "What is the long form for HTML?",
      answers: {
        a: 'Hypertext Markup Language',
        b: 'Hyper Markup Language',
        c: 'Hy-text Markup Language',
        d: 'Hypertext Markdown Language'
        
      },
      correctAnswer: 'b'
    },
    {
      question: "The correct sequence of HTML tags for starting a webpage is?",
      answers: {
        a: 'Head, Title, HTML, body',
        b: 'HTML, Body, Title, Head',
        c: 'HTML, Head, Title, Body',
        d: 'HTML, Head, Link, Body'
      },
      correctAnswer: 'c'
    }
  ];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

// generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    function  showQuestions(questions, quizContainer) {

    }
    function showResults(questions, quizContainer,resultsContainer){

    }
    //show the questions
    showQuestions(questions,quizContainer);

    //showresults
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
