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
