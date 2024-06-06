let currentPlayerLocation;
let intelligence = 0;
let treasureInterval;

function listen() {
    var listens = parseInt(localStorage.getItem('listens')) || 0;
    
    if (listens < 2) {
        intelligence += 5;
        alert("You listen and gained 5 intelligence points!");
        listens++;
        localStorage.setItem('listens', listens);
    } else {
        alert("You have already listened twice today!");
    }
}

var questions = [
    { question: "What is 2 + 2?", options: ["a. 3", "b. 4", "c. 5", "d. 6"], answer: "b" },
    { question: "What is the capital of Spain?", options: ["a. Madrid", "b. Barcelona", "c. Lisbon", "d. Rome"], answer: "a" },
    { question: "Which planet is known as the Red Planet?", options: ["a. Venus", "b. Jupiter", "c. Mars", "d. Saturn"], answer: "c" },
    { question: "Who painted the Mona Lisa?", options: ["a. Michelangelo", "b. Leonardo da Vinci", "c. Vincent van Gogh", "d. Pablo Picasso"], answer: "b" },
    { question: "What is the chemical symbol for gold?", options: ["a. Au", "b. Ag", "c. Hg", "d. Pb"], answer: "a" }
];

function displayQuestions() {
    var correctAnswers = 0;
    for (var i = 0; i < questions.length; i++) {
        var userAnswer = prompt(questions[i].question + "\n" + questions[i].options.join("\n"));
        if (userAnswer !== null && userAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
            correctAnswers++;
        }
    }
    var intelligencePoints = correctAnswers * 2;
    intelligence += intelligencePoints;
    alert("You gained " + intelligencePoints + " intelligence points for answering " + correctAnswers + " questions correctly!");
}

function quiz() {
    displayQuestions();
    alert("Current intelligence: " + intelligence);
}
