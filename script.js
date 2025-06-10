AOS.init({
    duration: 1000, 
    once: true      
  });

  function baixarArquivo() {
    const link = document.createElement('a');
    link.href = './arquivos/CV.pdf'; 
    link.download = 'Curriculo_Victor_Tadashi.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

//Menu hamburguer
