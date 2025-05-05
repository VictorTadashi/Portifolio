AOS.init({
    duration: 1000, // Duração da animação (ms)
    once: true      // Se quiser que a animação aconteça só uma vez
  });

  function baixarArquivo() {
    const link = document.createElement('a');
    link.href = './arquivos/CV.pdf'; 
    link.download = 'Curriculo_Victor_Tadashi.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }