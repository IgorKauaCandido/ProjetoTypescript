// login.ts

// Interface para representar credenciais de usuário
interface UserCredentials {
    username: string;
    password: string;
}

// Função de validação de login
function login(): void {
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const errorMessage = document.getElementById('error-message') as HTMLElement;

    const credentials: UserCredentials = {
        username: usernameInput.value,
        password: passwordInput.value
    };

    if (validateCredentials(credentials)) {
        // Redireciona para a página de gerenciamento se as credenciais estiverem corretas
        window.location.href = "gerenciamento.html";
    } else {
        // Mostra a mensagem de erro se as credenciais estiverem incorretas
        errorMessage.innerText = "Usuário ou senha incorretos.";
    }
}

// Função para validar as credenciais
function validateCredentials(credentials: UserCredentials): boolean {
    const validUsername = "Sabrina";
    const validPassword = "9258";

    return credentials.username === validUsername && credentials.password === validPassword;
}

// Vincula o evento de clique do botão ao login
document.getElementById('loginBtn')?.addEventListener('click', login);
