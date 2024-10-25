document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.querySelector('.review-form');
    
    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Aqui você pode adicionar a lógica para enviar a avaliação, por exemplo, para um servidor.

        // Exibe a mensagem de sucesso
        alert('Avaliação enviada com sucesso!');

        // Limpa os campos do formulário
        reviewForm.reset();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Adiciona o evento de submit ao formulário
    document
      .getElementById("loginForm")
      .addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário

        const emailInput = document.getElementById("email").value; // Obtém o valor do email

        // Exibe a mensagem de boas-vindas
        const welcomeMessage = document.getElementById("welcomeMessage");
        welcomeMessage.textContent = `Bem-vindo, ${emailInput}!`;
        welcomeMessage.style.display = "block"; // Torna a mensagem visível

        // Opcional: Limpar o formulário
        document.getElementById("loginForm").reset();
      });
  });
  document.querySelector('.login-icon').addEventListener('click', function() {
    window.location.href = "http://127.0.0.1:5500/Perfil/Perfil.html"; // URL da página de login
});

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o ícone do carrinho
    const cartIcon = document.getElementById("cart-icon");
    
    // Adiciona um evento de clique ao ícone do carrinho
    cartIcon.addEventListener("click", function() {
        // Redireciona para a página do carrinho
        window.location.href = "http://127.0.0.1:5500/carrinho/carrinho.html"; // Substitua pelo URL correto
    });
});
