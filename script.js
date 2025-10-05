// Flashcards
const cards = {
  folhetos: {q:'Quais são os três folhetos embrionários?',a:'Ectoderme, Mesoderme e Endoderme.'},
  epitelio: {q:'Função do tecido epitelial?',a:'Revestir, proteger, absorver e secretar.'},
  conjuntivo: {q:'O que significa MACOS?',a:'Modelado, Adiposo, Cartilaginoso, Ósseo e Sanguíneo.'},
  muscular: {q:'Tipos de tecido muscular?',a:'Estriado esquelético, estriado cardíaco e liso.'},
  nervoso: {q:'Função do tecido nervoso?',a:'Transmissão de impulsos nervosos.'}
};

document.querySelectorAll('[data-card]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-card');
    const node = document.getElementById('card-view');
    
    // Mostra pergunta
    node.innerHTML = `<strong>${cards[id].q}</strong><div style='color:var(--muted);margin-top:8px;'>Clique para ver</div>`;
    
    // Remove listeners antigos
    const newNode = node.cloneNode(true);
    node.parentNode.replaceChild(newNode, node);
    
    // Adiciona listener para mostrar resposta
    newNode.addEventListener('click', () => {
      newNode.innerHTML = `<strong>${cards[id].q}</strong><div style='color:var(--muted);margin-top:8px;'>${cards[id].a}</div>`;
    });
  });
});

// Quiz múltipla escolha
const quizQuestions = [
  {q:"Quais são os três folhetos embrionários?", a:["Ectoderme, Mesoderme e Endoderme","Ectoderme, Epiderme e Endoderme","Mesoderme, Endoderme e Epiderme"], correct:0},
  {q:"Função do tecido epitelial?", a:["Sustentar","Revestir, proteger, absorver e secretar","Transmitir sinais"], correct:1},
  {q:"O que significa MACOS?", a:["Modelado, Adiposo, Cartilaginoso, Ósseo e Sanguíneo","Muscular, Adiposo, Cartilaginoso, Ósseo e Sanguíneo","Modelado, Ácido, Cartilaginoso, Ósseo e Sanguíneo"], correct:0},
  {q:"Tipos de tecido muscular?", a:["Estriado esquelético, estriado cardíaco e liso","Liso, Nervoso e Ósseo","Estriado cardíaco, Nervoso e Revestimento"], correct:0},
  {q:"Função do tecido nervoso?", a:["Proteção","Movimento","Transmissão de impulsos nervosos"], correct:2}
];

document.getElementById("start-quiz").addEventListener("click", () => {
  const content = document.getElementById("content");
  let current = 0;

  function showQuestion(index) {
    const q = quizQuestions[index];
    content.innerHTML = `<div class="section-title">Quiz</div>
      <p>${q.q}</p>
      <div id="answers"></div>`;
    
    const answersDiv = document.getElementById("answers");
    q.a.forEach((ans, i) => {
      const btn = document.createElement("button");
      btn.className = "ans";
      btn.textContent = ans;
      btn.addEventListener("click", () => {
        if(i === q.correct) btn.classList.add("correct");
        else btn.classList.add("wrong");
        setTimeout(() => {
          current++;
          if(current < quizQuestions.length) showQuestion(current);
          else content.innerHTML = "<div class='section-title'>Parabéns!</div><p>Você terminou o quiz.</p>";
        }, 800);
      });
      answersDiv.appendChild(btn);
    });
  }

  showQuestion(current);
});
