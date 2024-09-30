// login.ts
var _a;
// Função de validação de login
function login() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var errorMessage = document.getElementById('error-message');
    var credentials = {
        username: usernameInput.value,
        password: passwordInput.value
    };
    if (validateCredentials(credentials)) {
        // Redireciona para a página de gerenciamento se as credenciais estiverem corretas
        window.location.href = "gerenciamento.html";
    }
    else {
        // Mostra a mensagem de erro se as credenciais estiverem incorretas
        errorMessage.innerText = "Usuário ou senha incorretos.";
    }
}
// Função para validar as credenciais
function validateCredentials(credentials) {
    var validUsername = "Sabrina";
    var validPassword = "9258";
    return credentials.username === validUsername && credentials.password === validPassword;
}
// Vincula o evento de clique do botão ao login
(_a = document.getElementById('loginBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', login);
