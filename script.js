
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('login-feedback');

 
    const validEmail = 'exemplo@email.com';
    const validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
        feedback.textContent = 'Login bem-sucedido! Redirecionando...';
        feedback.style.color = 'green';
     
    } else {
        feedback.textContent = 'E-mail ou senha inválidos. Tente novamente.';
        feedback.style.color = 'red';
       
    }
});

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.innerHTML = '&#128064;'; 
    } else {
        passwordInput.type = 'password';
        toggleIcon.innerHTML = '&#128065;';
    }
}
