document.getElementById("preference-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Exibir mensagem de sucesso com animação de fade-in
    const message = document.getElementById("success-message");
    message.style.display = "block";
    message.style.opacity = "0";

    // Animação de fade-in
    let opacity = 0;
    const fadeIn = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.1;
            message.style.opacity = opacity.toString();
        } else {
            clearInterval(fadeIn);
        }
    }, 50);

    // Limpar o formulário após o cadastro
    document.getElementById("preference-form").reset();
});