let currentQuestion = 0;
let score = 0;

const questions = [
  {
    type: 'abcd',
    question: "Wie won de 2022 World Cup in Qatar?",
    answers: {
      a: "Marokko",
      b: "Frankrijk",
      c: "Argentinië",
      d: "Kroatië"
    },
    correctAnswer: "c",
    explanation: "Argentinië won de 2022 World Cup in Qatar."
  },
  // Voeg hier de rest van je vragen toe
];

const questionContainer = document.querySelector('.question-container');
const scoreDisplay = document.getElementById('score');
const endSection = document.getElementById('end-section');

function displayQuestion() {
  const current = questions[currentQuestion];
  if (current.type === 'abcd') {
    const answersContainer = document.createElement('div');
    answersContainer.classList.add('answers');
    Object.keys(current.answers).forEach(key => {
      const answerDiv = document.createElement('div');
      answerDiv.classList.add('answer');
      answerDiv.textContent = `${key.toUpperCase()}. ${current.answers[key]}`;
      answerDiv.dataset.answer = key;
      answerDiv.addEventListener('click', () => checkAnswer(key));
      answersContainer.appendChild(answerDiv);
    });
    questionContainer.innerHTML = '';
    questionContainer.appendChild(document.createElement('div')).classList.add('question');
    questionContainer.querySelector('.question').textContent = current.question;
    questionContainer.appendChild(answersContainer);
    questionContainer.appendChild(document.createElement('div')).classList.add('result-container');
  } else if (current.type === 'open') {
    questionContainer.innerHTML = `
      <div class="question">${current.question}</div>
      <input type="text" id="answer" placeholder="Typ je antwoord hier">
      <button onclick="checkOpenAnswer()">Controleer antwoord</button>
      <div class="result-container"></div>
    `;
  }
}

function checkAnswer(selectedOption) {
  const userAnswer = selectedOption;
  const correctAnswer = questions[currentQuestion].correctAnswer;
  const explanation = questions[currentQuestion].explanation;

  if (userAnswer === correctAnswer) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    displayResult(true, explanation);
  } else {
    displayResult(false, explanation);
  }
}

function displayResult(isCorrect, explanation) {
  const resultContainer = document.querySelector('.result-container');
  const resultMessage = isCorrect ? 'Goed antwoord!' : `Fout antwoord. Het juiste antwoord is ${questions[currentQuestion].correctAnswer}. ${explanation}`;

  resultContainer.textContent = resultMessage;

  setTimeout(() => {
    resultContainer.innerHTML = '';
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      displayEndScore();
    }
  }, isCorrect ? 0 : 5000);
}

function checkOpenAnswer() {
  const userAnswer = document.getElementById('answer').value.trim();
  const correctAnswer = questions[currentQuestion].correctAnswer;
  const explanation = questions[currentQuestion].explanation;

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    displayResult(true, explanation);
  } else {
    displayResult(false, explanation);
  }
}

function displayEndScore() {
  questionContainer.style.display = 'none'; // Verberg de vraagsectie
  endSection.style.display = 'block'; // Toon de eindsectie

  const totalQuestionsElement = document.getElementById('total-questions');
  const correctAnswersElement = document.getElementById('correct-answers');
  const percentageCorrectElement = document.getElementById('percentage-correct');

  totalQuestionsElement.textContent = questions.length;
  correctAnswersElement.textContent = score;
  const percentageCorrect = (score / questions.length) * 100;
  percentageCorrectElement.textContent = percentageCorrect.toFixed(2); // Weergeven tot twee decimalen
}

function restartQuiz() {
  // Reset de variabelen
  currentQuestion = 0;
  score = 0;
  // Reset de score weergave
  scoreDisplay.textContent = `Score: ${score}`;
  // Toon de eerste vraag opnieuw
  displayQuestion();
}

function goToChampionsLeagueQuiz() {
  // Hier kun je de logica toevoegen om naar de Champions League-quiz te gaan
}

displayQuestion();
