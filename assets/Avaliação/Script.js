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
