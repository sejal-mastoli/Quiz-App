const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "F. Scott Fitzgerald", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "Harper Lee", correct: true },
            { text: "Ernest Hemingway", correct: false }
        ]
    },
    {
        question: "Who painted the 'Mona Lisa'?",
        answers: [
            { text: "Leonardo da Vinci", correct: true },
            { text: "Michelangelo", correct: false },
            { text: "Raphael", correct: false },
            { text: "Caravaggio", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(button, answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(selectedButton, answer) {
    const correct = answer.correct;
    setButtonStatus(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        const answerText = button.innerText;
        const correctAnswer = questions[currentQuestionIndex].answers.find(a => a.text === answerText && a.correct);
        if (correctAnswer) {
            setButtonStatus(button, true);
        }
        button.disabled = true; // Disable all buttons after an answer is selected
    });
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove('hide');
    } else {
        alert('Quiz finished!');
    }
}

function setButtonStatus(button, correct) {
    button.classList.remove('correct');
    button.classList.remove('wrong');
    if (correct) {
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
    }
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
});

startQuiz();


