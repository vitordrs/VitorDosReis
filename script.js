function togglePainel(id) {
    var painel = document.getElementById(id);
    
    if (painel.classList.contains('open')) {
        painel.classList.remove('open'); // Remove a classe para fechar
    } else {
        painel.classList.add('open'); // Adiciona a classe para abrir
    }
}
