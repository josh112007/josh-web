const questions = [
  {
    question: "Anong palayaw ko?",
    options: ["Burnok", "Josua", "Jot"],
    correct: 2
  },
  {
    question: "Kelan birthday ko?",
    options: ["sept. 11", "ewan", "dec. 11"],
    correct: 2
  },
  {
    question: "Anong favorite word ko?",
    options: ["Nigga", "burat", "yesdaddy?"],
    correct: 0
  },
  {
    question: "Anong favorite color ko?",
    options: ["blue", "bgold", "transparent"],
    correct: 1
  },
  {
    question: "pogi ba ako? (very serious question)",
    options: ["yes", "yeah", "opo"],
    correct: 2
  }
];

let current = 0;
let score = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "answer";
    btn.onclick = () => {
      if (index === q.correct) score++;
      nextQuestion();
    };
    answersDiv.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question").textContent = "Quiz Finished!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("correct").textContent = `correct answers:`;
    document.getElementById("q1").textContent = `1. Jot`;
    document.getElementById("q2").textContent = `2. Dec.11`;
    document.getElementById("q3").textContent = `3. Nigga`;
    document.getElementById("q4").textContent = `4. Bgold`;
    document.getElementById("q5").textContent = `5. opo (magalang dapat)`;
    document.getElementById("score").textContent = `Your score: ${score}/${questions.length}`;
  }
}

showQuestion();

function handleSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById(`name`).value;
  const choice = document.querySelector(`input [name="choice"]:checked`).value;
  
  console.log("Name:", name);
  console.log("Tuli ka na ba?", choice);
  
  alert(`Name: ${name}\nTuli ka na ba?: ${choice}`);
  
  return false;
}

