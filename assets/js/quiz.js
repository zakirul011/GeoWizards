const questions = [
  {
    question: "Who was the first person to travel in Space?",
    answers: [
      { text: "Yuri Gagarin", correct: true },
      { text: "Laika", correct: false },
      { text: "Neil Armstrong", correct: false },
      { text: "Marcos Pontes", correct: false },
      { text: "Buzz Aldrin", correct: false },
    ],
  },

  {
    question: "What is the highest mountain in the world?",
    answers: [
      { text: "Mauna Kea", correct: false },
      { text: "Dhaulagiri", correct: false },
      { text: "Mount Chimborazo", correct: false },
      { text: "Mount Everest", correct: true },
      { text: "Fog Peak", correct: false },
    ],
  },

  {
    question: "Which country is shaped like a boot?",
    answers: [
      { text: "Bhutan", correct: false },
      { text: "Brazil", correct: false },
      { text: "Portugal", correct: false },
      { text: "Italy", correct: true },
      { text: "Mexico", correct: false },
    ],
  },

  {
    question: "Who invented the light bulb?",
    answers: [
      { text: "Graham Bell", correct: false },
      { text: "Steve Jobs", correct: false },
      { text: "Thomas Edison", correct: true },
      { text: "Henry Ford", correct: false },
      { text: "Santos Dumont", correct: false },
    ],
  },

  {
    question:
      "How long does it take for the Earth to make a complete rotation around itself?",
    answers: [
      { text: "Approximately 24 hours", correct: true },
      { text: "365 days", correct: false },
      { text: "7 days", correct: false },
      { text: "365 or 366 days", correct: false },
      { text: "30 or 31 days", correct: false },
    ],
  },

  {
    question: "At what temperature does water boil?",
    answers: [
      { text: "200 ºC", correct: false },
      { text: "-10 ºC", correct: false },
      { text: "180 ºC", correct: false },
      { text: "0 ºC", correct: false },
      { text: "100 ºC", correct: true },
    ],
  },

  {
    question: "How many bones do we have in our body?",
    answers: [
      { text: "126", correct: false },
      { text: "206", correct: true },
      { text: "18", correct: false },
      { text: "300", correct: false },
      { text: "200", correct: false },
    ],
  },

  {
    question: "What is the largest planet in the solar system?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Moon", correct: false },
      { text: "Saturn", correct: false },
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
    ],
  },

  {
    question: "What is the closest planet to the Sun?",
    answers: [
      { text: "Neptune", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: true },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
    ],
  },

  {
    question: "How many continents are there?",
    answers: [
      { text: "2", correct: false },
      { text: "8", correct: false },
      { text: "4", correct: false },
      { text: "6", correct: true },
      { text: "3", correct: false },
    ],
  },

  {
    question: "What are the two most spoken languages in the world?",
    answers: [
      { text: "English and Spanish", correct: false },
      { text: "English and Mandarin Chinese", correct: true },
      { text: "Chinese and French Mandarin", correct: false },
      { text: "English and Portuguese", correct: false },
      { text: "Spanish and Chinese Mandarin", correct: false },
    ],
  },

  {
    question: "Which monument is famous for its slope?",
    answers: [
      { text: "Eiffel Tower", correct: false },
      { text: "Sphinx", correct: false },
      { text: "Statue of Liberty", correct: false },
      { text: "Christ, the Redeemer", correct: false },
      { text: "Leaning Tower of Pisa", correct: true },
    ],
  },

  {
    question: "Kryptonite is which superhero's weakness?",
    answers: [
      { text: "Batman", correct: false },
      { text: "Hulk", correct: false },
      { text: "Superman", correct: true },
      { text: "Captain America", correct: false },
      { text: "Flash", correct: false },
    ],
  },

  {
    question: "Who painted Mona Lisa?",
    answers: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Salvador Dalí", correct: false },
      { text: "Van Gogh", correct: false },
      { text: "Tarsila do Amaral", correct: false },
      { text: "Pablo Picasso", correct: false },
    ],
  },

  {
    question: "What do the five Olympic rings represent?",
    answers: [
      { text: "The parts of the world united by Olympism.", correct: true },
      { text: "The rings of artistic gymnastics.", correct: false },
      {
        text: "Five types of sport: net, field, combat, precision, invasion.",
        correct: false,
      },
      {
        text: "Five Olympian gods: Zeus, Athena, Apollo, Dionysus and Hermes.",
        correct: false,
      },
      {
        text: "Olympic symbols: torch, anthem, mascot, motto and medals.",
        correct: false,
      },
    ],
  },

  {
    question: "What is the popular name for sodium chloride?",
    answers: [
      { text: "Vinegar", correct: false },
      { text: "Water", correct: false },
      { text: "Paper", correct: false },
      { text: "Yeast", correct: false },
      { text: "Table salt", correct: true },
    ],
  },

  {
    question: "What nationality was Napoleon Bonaparte?",
    answers: [
      { text: "French", correct: true },
      { text: "Brazilian", correct: false },
      { text: "Mexican", correct: false },
      { text: "Japanese", correct: false },
      { text: "Egyptian", correct: false },
    ],
  },

  {
    question: "What animal lays the biggest egg?",
    answers: [
      { text: "Hummingbird", correct: false },
      { text: "Ostrich", correct: true },
      { text: "Giant Tortoise", correct: false },
      { text: "Chicken", correct: false },
      { text: "Peacock", correct: false },
    ],
  },

  {
    question: "What do pandas eat?",
    answers: [
      { text: "Bamboo", correct: true },
      { text: "Birds, eggs and fish", correct: false },
      { text: "Fruit and honey", correct: false },
      { text: "Meat", correct: false },
      { text: "Honey", correct: false },
    ],
  },

  {
    question: "In which country was the Berlin Wall built?",
    answers: [
      { text: "United States", correct: false },
      { text: "China", correct: false },
      { text: "North Korea", correct: false },
      { text: "Germany", correct: true },
      { text: "Brazil", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQeustionIndex = 0;
let score = 0;

function startQuiz() {
  currentQeustionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQeustion = questions[currentQeustionIndex];
  let questionNo = currentQeustionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQeustion.question;

  currentQeustion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQeustionIndex++;
  if (currentQeustionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQeustionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
