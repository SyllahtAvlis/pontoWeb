// Função para registrar a entrada
function registrarEntrada(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Aqui você pode adicionar lógica para registrar a entrada, como uma chamada AJAX para um servidor
    
    // Exibe os botões adicionais
    document.getElementById('botoes-adicionais').style.display = 'block';
}

// Função para redirecionar para a página de registro de saída
function irParaSaida() {
    window.location.href = 'registro-saida.html';
}

// Função para voltar para a página de login
function voltarParaLogin() {
    window.location.href = 'login.html';
}

// Função para registrar a saída
function registrarSaida(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Aqui você pode adicionar lógica para registrar a saída, como uma chamada AJAX para um servidor
    
    // Exibe o botão "Sair"
    document.getElementById('botao-sair').style.display = 'block';
}
