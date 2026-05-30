// Função para lidar com o envio do formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Pega os valores dos campos
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('login-feedback');

    // Simulação básica de verificação de credenciais (substitua por lógica real de backend)
    const validEmail = 'exemplo@email.com';
    const validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
        feedback.textContent = 'Login bem-sucedido! Redirecionando...';
        feedback.style.color = 'green';
        // Redirecione para a página do painel aqui, se necessário:
        // window.location.href = 'dashboard.html'; 
    } else {
        feedback.textContent = 'E-mail ou senha inválidos. Tente novamente.';
        feedback.style.color = 'red';
        // Limpa os campos para segurança (opcional)
        // document.getElementById('password').value = ''; 
    }
});

// Função para alternar a visibilidade da senha
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.innerHTML = '&#128064;'; // Ícone de olho aberto
    } else {
        passwordInput.type = 'password';
        toggleIcon.innerHTML = '&#128065;'; // Ícone de olho fechado
    }
}