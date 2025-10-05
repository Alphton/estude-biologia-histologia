// ---------------------
// Quiz Interativo
// ---------------------

const startBtn = document.getElementById("start-quiz");
const contentDiv = document.getElementById("content");
const quizContainer = document.getElementById("quiz-container");

// Perguntas do quiz
const quizQuestions = [
  {
    q: "Quais são os três folhetos embrionários?",
    a: [
      "Ectoderme, Mesoderme e Endoderme",
      "Ectoderme, Epiderme e Endoderme",
      "Mesoderme, Endoderme e Epiderme"
    ],
    correct: 0
  },
  {
    q: "Função do tecido epitelial?",
    a: [
      "Sustentar",
      "Revestir, proteger, absorver e secretar",
      "Transmitir sinais"
    ],
    correct: 1
  },
  {
    q: "O que significa MACOS?",
    a: [
      "Modelado, Adiposo, Cartilaginoso, Ósseo e Sanguíneo",
      "Muscular, Adiposo, Cartilaginoso, Ósseo e Sanguíneo",
      "Modelado, Ácido, Cartilaginoso, Ósseo e Sanguíneo"
    ],
    correct: 0
  },
  {
    q: "Tipos de tecido muscular?",
    a: [
      "Estriado esquelético, estriado cardíaco e liso",
      "Liso, Nervoso e Ósseo",
      "Estriado cardíaco, Nervoso e Revestimento"
    ],
    correct: 0
  },
  {
    q: "Função do tecido nervoso?",
    a: [
      "Proteção",
      "Movimento",
      "Transmissão de impulsos nervosos"
    ],
    correct: 2
  }
];

// Inicia o quiz
startBtn.addEventListener("click", () => {
  contentDiv.style.display = "none";        // Esconde conteúdo
  quizContainer.style.display = "block";    // Mostra quiz

  let current = 0;
  let score = 0;

  function showQuestion(index) {
    const q = quizQuestions[index];

    quizContainer.innerHTML = `
      <div id="progress">Pergunta ${index + 1} / ${quizQuestions.length}</div>
      <div class="section-title">Quiz</div>
      <p>${q.q}</p>
      <div id="answers"></div>
    `;

    const answersDiv = document.getElementById("answers");

    q.a.forEach((ans, i) => {
      const btn = document.createElement("button");
      btn.className = "ans";
      btn.textContent = ans;

      btn.addEventListener("click", () => {
        if (i === q.correct) btn.classList.add("correct"), score++;
        else btn.classList.add("wrong");

        // Desativa todas as respostas
        Array.from(answersDiv.children).forEach(b => b.disabled = true);

        // Próxima pergunta após delay
        setTimeout(() => {
          current++;
          if (current < quizQuestions.length) showQuestion(current);
          else showResult();
        }, 700);
      });

      answersDiv.appendChild(btn);
    });
  }

  function showResult() {
    quizContainer.innerHTML = `
      <div class="section-title">Parabéns!</div>
      <p>Você terminou o quiz com ${score} / ${quizQuestions.length} acertos.</p>
      <button class="btn" id="back-content">Voltar ao conteúdo</button>
    `;
    document.getElementById("back-content").addEventListener("click", () => {
      quizContainer.style.display = "none";
      contentDiv.style.display = "block";
    });
  }

  showQuestion(current);
});
