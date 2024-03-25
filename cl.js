let currentQuestion = 0;
let score = 0;
 
const questions = [
  // ABCD-vragen
  {
    type: 'abcd',
    question: "Welke club heeft de meeste opeenvolgende Champions League-titels gewonnen?",
    answers: {
      a: "Real Madrid",
      b: "Bayern Munich",
      c: "Liverpool",
      d: "Barcelona"
    },
    correctAnswer: "a",
    explanation: "Juiste antwoord is a."
  },
  {
    type: 'abcd',
    question: "Welke speler heeft de meeste Champions League-titels gewonnen?    ",
    answers: {
      a: "Lionel Messi",
      b: "Cristiano Ronaldo",
      c: "Sergio Ramos",
      d: "Xavi Hernandez"
    },
    correctAnswer: "b",
    explanation: "Juiste antwoord is b."
  },
  {
    type: 'abcd',
    question: "In welk jaar werd de Champions League voor het eerst omgedoopt van de Europacup I?    ",
    answers: {
      a: "1992",
      b: "1990",
      c: "1988",
      d: "1994"
    },
    correctAnswer: "a",
    explanation: "Juiste antwoord is a."
  },
  {
    type: 'abcd',
    question: "Welke van de volgende clubs heeft nog nooit de Champions League gewonnen?",
    answers: {
      a: "Chelsea FC",
      b: "Inter Milan",
      c: "Liverpool FC",
      d: "Borussia Dortmund"
    },
    correctAnswer: "d",
    explanation: "Juiste antwoord is d."
  },
  {
    type: 'abcd',
    question: "Wie is de jongste speler die ooit in de Champions League heeft gescoord?    ",
    answers: {
      a: "Raúl González",
      b: "Lionel Messi",
      c: "Wayne Rooney",
      d: "Ansu Fati"
    },
    correctAnswer: "d",
    explanation: "Juiste antwoord is d."
  },
  {
    type: 'abcd',
    question: "Welke van de volgende steden heeft nog nooit de Champions League-finale georganiseerd?    ",
    answers: {
      a: "Madrid",
      b: "Rome",
      c: "Londen",
      d: "Athene"
    },
    correctAnswer: "c",
    explanation: "Juiste antwoord is c."
  },
  {
    type: 'abcd',
    question: "Welk land heeft de meeste verschillende clubs die de Champions League hebben gewonnen?    ",
    answers: {
      a: "Spanje",
      b: "Italië",
      c: "Engeland",
      d: "Duitsland"
    },
    correctAnswer: "b",
    explanation: "Juiste antwoord is b."
  },
  {
    type: 'abcd',
    question: "Wat was het seizoen waarin de Champions League-finale voor het eerst werd gespeeld in een neutraal stadion?    ",
    answers: {
      a: "1992-1993",
      b: "1997-1998",
      c: "1999-2000",
      d: "2002-2003"
    },
    correctAnswer: "c",
    explanation: "Juiste antwoord is c."
  },
  {
    type: 'abcd',
    question: "Wie is de enige club die de Champions League-titel heeft gewonnen zonder een enkele keer te verliezen gedurende het hele toernooi?    ",
    answers: {
      a: "Manchester United",
      b: "AC Milan",
      c: "FC Barcelona",
      d: "Bayern München"
    },
    correctAnswer: "c",
    explanation: "Juiste antwoord is c."
  },
  {
    type: 'abcd',
    question: "Welke speler heeft het record voor de snelste hattrick ooit gescoord in de Champions League?    ",
    answers: {
      a: "Cristiano Ronaldo",
      b: "Lionel Messi",
      c: "Filippo Inzaghi",
      d: "Bafétimbi Gomis"
    },
    correctAnswer: "d",
    explanation: "Juiste antwoord is d."
  },
 
  {
    type: 'open',
    question: "Welk team heeft de meeste Champions League-titels gewonnen?",
    correctAnswer: "Real Madrid",
    explanation: "Real Madrid heeft tot nu toe de meeste Champions League-titels gewonnen, met een totaal van 13 overwinningen"
  },
  {
    type: 'open',
    question: "Wie is de topscorer aller tijden in de geschiedenis van de Champions League?",
    correctAnswer: "Cristiano Ronaldo",
    explanation: "Cristiano Ronaldo heeft het record voor de meeste doelpunten gescoord in de geschiedenis van de Champions League.    "
  },
  {
    type: 'open',
    question: "In welk jaar vond de eerste editie van de Champions League plaats?",
    correctAnswer: "1955",
    explanation: "De eerste editie van de Champions League vond plaats in het seizoen 1955-1956.    "
  },
  {
    type: 'open',
    question: "Welk team won de allereerste editie van de Champions League?",
    correctAnswer: "Real Madrid",
    explanation: "Real Madrid won de inaugurele editie van de Champions League in het seizoen 1955-1956.    ",
  },
  {
    type: 'open',
    question: "Hoeveel teams nemen er deel aan de groepsfase van de huidige Champions League?    ",
    correctAnswer: "32 teams",
    explanation: "In de huidige opzet nemen 32 teams deel aan de groepsfase van de Champions League.    ."
  },
  {
    type: 'open',
    question: "Welke speler heeft de meeste assists gegeven in één enkel Champions League-seizoen?",
    correctAnswer: "Neymar",
    explanation: "Neymar heeft het record voor de meeste assists in één enkel Champions League-seizoen.    "
  },
  {
    type: 'open',
    question: "Wie is de jongste doelpuntenmaker in de geschiedenis van de Champions League?",
    correctAnswer: "Ansu Fati",
    explanation: "Ansu Fati is de jongste doelpuntenmaker ooit in de Champions League.    "
  },
  {
    type: 'open',
    question: "Welke club houdt het record voor de grootste overwinning in een Champions League-finale?    ",
    correctAnswer: "Bayern München",
    explanation: "Bayern München behaalde de grootste overwinning in een Champions League-finale met een 7-0 overwinning op Eintracht Frankfurt in 1975."
  },
  {
    type: 'open',
    question: "Welk land heeft de meeste verschillende winnende clubs in de geschiedenis van de Champions League?    ",
    correctAnswer: "Spanje",
    explanation: "Spanje heeft het hoogste aantal verschillende winnende clubs in de geschiedenis van de Champions League.    "
  },
  {
    type: 'open',
    question: "Wie is de enige speler die drie opeenvolgende Champions League-titels heeft gewonnen met twee verschillende clubs?    ",
    correctAnswer: "Cristiano Ronaldo",
    explanation: "Cristiano Ronaldo is de enige speler die drie opeenvolgende Champions League-titels heeft gewonnen met twee verschillende clubs: Manchester United (2008) en Real Madrid (2016, 2017).    "
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
  }, isCorrect ? 1000 : 5000); // 1 seconde timeout voor goed antwoord, 5 seconden voor fout antwoord
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
 
// Start de quiz door de eerste vraag weer te geven
displayQuestion();