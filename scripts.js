document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.centralizado a');
    let currentIndex = 0;

    // Função para navegar pelos itens do menu
    function navigateMenu(direction) {
        currentIndex = (currentIndex + direction + menuItems.length) % menuItems.length;
        menuItems[currentIndex].focus();
    }

    // Suporte ao controle de Xbox 360
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            navigateMenu(1); // Avançar para a direita
        } else if (event.key === 'ArrowLeft') {
            navigateMenu(-1); // Voltar para a esquerda
        } else if (event.key === 'Enter') {
            menuItems[currentIndex].click(); // Acessar o item do menu
        }
    });

    // Inicializar o primeiro item como foco
    menuItems[currentIndex].focus();
});
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.centralizado a');
    let currentIndex = 0;

    // Função para navegar pelos itens do menu
    function navigateMenu(direction) {
        currentIndex = (currentIndex + direction + menuItems.length) % menuItems.length;
        menuItems[currentIndex].focus();
    }

    // Suporte ao controle de Xbox 360, Xbox One, Series S/X, PS4 e PS5
    function handleGamepadInput() {
        const gamepad = navigator.getGamepads()[0]; // Pega o primeiro controle conectado

        if (!gamepad) return;

        // Detecta o botão de direções (setas ou analógico)
        if (gamepad.buttons[12].pressed || gamepad.axes[0] > 0.5) { // Direita (botão 12 ou eixo analógico direito)
            navigateMenu(1); // Avançar para a direita
        } else if (gamepad.buttons[13].pressed || gamepad.axes[0] < -0.5) { // Esquerda (botão 13 ou eixo analógico esquerdo)
            navigateMenu(-1); // Voltar para a esquerda
        }

        // Detecta o botão "Enter" (normalmente "A" no Xbox ou "X" no PS)
        if (gamepad.buttons[0].pressed) {
            menuItems[currentIndex].click(); // Acessar o item do menu
        }
    }

    // Atualiza a navegação de gamepad a cada quadro
    function gamepadLoop() {
        handleGamepadInput();
        requestAnimationFrame(gamepadLoop); // Chama a função novamente no próximo quadro
    }

    // Iniciar a verificação do gamepad
    window.addEventListener("gamepadconnected", () => {
        gamepadLoop(); // Começa a loop de checagem quando o gamepad for conectado
    });

    // Inicializar o primeiro item como foco
    menuItems[currentIndex].focus();
});
