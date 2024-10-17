// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form'); // Seleciona o formulário

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Aqui você pode adicionar a lógica de envio do formulário, se necessário

        // Exibe a mensagem de sucesso
        alert('Mensagem enviada com sucesso!');
        
        // Limpa os campos do formulário após o envio
        form.reset();
    });
});
