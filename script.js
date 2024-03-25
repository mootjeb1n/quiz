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
  {
    type: 'abcd',
    question: "Hoe vaak heeft Brazilië de FIFA World Cup gewonnen?",
    answers: {
      a: "3",
      b: "5",
      c: "7",
      d: "9"
    },
    correctAnswer: "b",
    explanation: "Brazilië heeft de FIFA World Cup vijf keer gewonnen."
  },
  {
    type: 'abcd',
    question: "Welke speler heeft de meeste goals gescoord in een enkel FIFA World Cup-toernooi?",
    answers: {
      a: "Pele",
      b: "Miroslav Klose",
      c: "Ronaldo",
      d: "Just Fontaine"
    },
    correctAnswer: "d",
    explanation: "Just Fontaine uit Frankrijk heeft het record voor de meeste doelpunten in een enkel FIFA World Cup-toernooi, met 13 doelpunten in 1958."
  },
  {
    type: 'abcd',
    question: "In welk jaar vond de allereerste FIFA World Cup plaats?",
    answers: {
      a: "1926",
      b: "1930",
      c: "1934",
      d: "1938"
    },
    correctAnswer: "b",
    explanation: "De allereerste FIFA World Cup vond plaats in 1930."
  },
  {
    type: 'abcd',
    question: "Welk land heeft het record voor de meeste opeenvolgende FIFA World Cup-titels?",
    answers: {
      a: "Brazilië",
      b: "Duitsland",
      c: "Italië",
      d: "Argentinië"
    },
    correctAnswer: "a",
    explanation: "Brazilië heeft het record voor de meeste opeenvolgende FIFA World Cup-titels, met 2 opeenvolgende titels in 1958 en 1962."
  },
  {
    type: 'abcd',
    question: "Welke speler heeft de meeste doelpunten in de geschiedenis van de FIFA World Cup?",
    answers: {
      a: "Miroslav Klose",
      b: "Pele",
      c: "Ronaldo",
      d: "Lionel Messi"
    },
    correctAnswer: "a",
    explanation: "Miroslav Klose uit Duitsland heeft het record voor de meeste doelpunten in de geschiedenis van de FIFA World Cup, met 16 doelpunten."
  },
  {
    type: 'abcd',
    question: "Hoeveel landen hebben minstens één keer de FIFA World Cup gewonnen?",
    answers: {
      a: "16",
      b: "8",
      c: "24",
      d: "28"
    },
    correctAnswer: "b",
    explanation: "In totaal hebben 24 landen minstens één keer de FIFA World Cup gewonnen."
  },
  {
    type: 'abcd',
    question: "Wie is de jongste speler ooit die heeft deelgenomen aan een FIFA World Cup-wedstrijd?",
    answers: {
      a: "Pele",
      b: "Norman Whiteside",
      c: "Diego Maradona",
      d: "Michael Owen"
    },
    correctAnswer: "b",
    explanation: "Norman Whiteside uit Noord-Ierland is de jongste speler ooit die heeft deelgenomen aan een FIFA World Cup-wedstrijd, op 17-jarige leeftijd in 1982."
  },
  {
    type: 'abcd',
    question: "Welk land heeft de meeste keer de finale van de FIFA World Cup bereikt zonder te winnen?",
    answers: {
      a: "Nederland",
      b: "Italië",
      c: "Duitsland",
      d: "Argentinië"
    },
    correctAnswer: "a",
    explanation: "Nederland heeft de meeste keer de finale van de FIFA World Cup bereikt zonder te winnen, namelijk 3 keer (in 1974, 1978 en 2010)."
  },
  {
    type: 'abcd',
    question: "Welk land heeft de minste aantal doelpunten gescoord in de geschiedenis van de FIFA World Cup?",
    answers: {
      a: "Jamaica",
      b: "China",
      c: "Trinidad en Tobago",
      d: "Canada"
    },
    correctAnswer: "c",
    explanation: "Trinidad en Tobago heeft het minste aantal doelpunten gescoord in de geschiedenis van de FIFA World Cup, met slechts 0 doelpunten in één enkel toernooi in 2006."
  },

  {
    type: 'open',
    question: "Wie is de oudste doelpuntenmaker in de geschiedenis van de FIFA World Cup?",
    correctAnswer: "Roger Milla",
    explanation: "Roger Milla uit Kameroen is de oudste doelpuntenmaker in de geschiedenis van de FIFA World Cup, met een leeftijd van 42 jaar en 39 dagen toen hij scoorde tijdens het WK 1994."
  },
  {
    type: 'open',
    question: "Wie heeft de snelste goal ooit gescoord in een FIFA World Cup-wedstrijd?",
    correctAnswer: "Hakan Şükür",
    explanation: "Hakan Şükür van Turkije heeft de snelste goal ooit gescoord in een FIFA World Cup-wedstrijd, slechts 11 seconden na het begin van de wedstrijd tegen Zuid-Korea in 2002."
  },
  {
    type: 'open',
    question: "Welke speler heeft de meeste assists gegeven in de geschiedenis van de FIFA World Cup?",
    correctAnswer: "Lionel Messi",
    explanation: "Lionel Messi heeft de meeste assists gegeven in de geschiedenis van de FIFA World Cup, met in totaal 12 assists."
  },
  {
    type: 'open',
    question: "Wat is de grootste overwinning in een enkele FIFA World Cup-wedstrijd?",
    correctAnswer: "Hongarije 10-1 El Salvador",
    explanation: "De grootste overwinning",
  },
  {
    type: 'open',
    question: "Wat is de grootste comeback in een enkele FIFA World Cup-wedstrijd?",
    correctAnswer: "Portugal tegen Noord-Korea in 1966",
    explanation: "De grootste comeback in een enkele FIFA World Cup-wedstrijd was toen Portugal een 0-3 achterstand ophaalde om met 5-3 van Noord-Korea te winnen in 1966."
  },
  {
    type: 'open',
    question: "Wie heeft de snelste hattrick ooit gescoord in een FIFA World Cup-wedstrijd?",
    correctAnswer: "Sven Rydell",
    explanation: "Sven Rydell van Zweden heeft de snelste hattrick ooit gescoord in een FIFA World Cup-wedstrijd, binnen 2 minuten tijdens de wedstrijd tegen Cuba in 1938."
  },
  {
    type: 'open',
    question: "Welke speler heeft de meeste wedstrijden gespeeld op de FIFA World Cup?",
    correctAnswer: "Lothar Matthäus",
    explanation: "Lothar Matthäus van Duitsland heeft de meeste wedstrijden gespeeld op de FIFA World Cup, met in totaal 25 wedstrijden."
  },
  {
    type: 'open',
    question: "Welk land heeft de meeste doelpunten gescoord in de geschiedenis van de FIFA World Cup?",
    correctAnswer: "Duitsland",
    explanation: "Duitsland heeft de meeste doelpunten gescoord in de geschiedenis van de FIFA World Cup, met in totaal meer dan 230 doelpunten."
  },
  {
    type: 'open',
    question: "Wie heeft het meeste aantal clean sheets in de geschiedenis van de FIFA World Cup?",
    correctAnswer: "Fabien Barthez",
    explanation: "Fabien Barthez van Frankrijk heeft het meeste aantal clean sheets in de geschiedenis van de FIFA World Cup, met in totaal 10 clean sheets."
  },
  {
    type: 'open',
    question: "Wie heeft het meeste aantal assists gegeven in één enkele FIFA World Cup-toernooi?",
    correctAnswer: "Maximiliano Rodríguez",
    explanation: "Maximiliano Rodríguez van Argentinië heeft het meeste aantal assists gegeven in één enkele FIFA World Cup-toernooi, met 6 assists in 2006."
  }

];

const questionContainer = document.querySelector('.question-container');
const scoreDisplay = document.getElementById('score');

function displayQuestion() {
  const current = questions[currentQuestion];
  if (current.type === 'abcd') {
    const answersHTML = Object.keys(current.answers).map(key => `
      <div class="answer" onclick="checkAnswer('${key}')">${key.toUpperCase()}. ${current.answers[key]}</div>
    `).join('');
    questionContainer.innerHTML = `
      <div class="question">${current.question}</div>
      <div class="answers">
        ${answersHTML}
      </div>
      <div class="result-container"></div> <!-- Container voor resultaten -->
    `;
  } else if (current.type === 'open') {
    questionContainer.innerHTML = `
      <div class="question">${current.question}</div>
      <input type="text" id="answer" placeholder="Typ je antwoord hier">
      <button onclick="checkOpenAnswer()">Controleer antwoord</button>
      <div class="result-container"></div> <!-- Container voor resultaten -->
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
  }, isCorrect ? 1000 : 5000); 
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
  questionContainer.style.display = 'none'; 
  endSection.style.display = 'block'; 

  const totalQuestionsElement = document.getElementById('total-questions');
  const correctAnswersElement = document.getElementById('correct-answers');
  const percentageCorrectElement = document.getElementById('percentage-correct');

  totalQuestionsElement.textContent = questions.length;
  correctAnswersElement.textContent = score;
  const percentageCorrect = (score / questions.length) * 100;
  percentageCorrectElement.textContent = percentageCorrect.toFixed(2);
}


displayQuestion();
