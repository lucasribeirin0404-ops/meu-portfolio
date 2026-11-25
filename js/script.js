
// Seleciona o botão e o menu
const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

// Abre e fecha o menu no celular
botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("ativo");

    if (menu.classList.contains("ativo")) {
        botaoMenu.textContent = "✕";
        botaoMenu.setAttribute("aria-expanded", "true");
    } else {
        botaoMenu.textContent = "☰";
        botaoMenu.setAttribute("aria-expanded", "false");
    }
});

// Fecha o menu ao clicar em um link
const links = document.querySelectorAll("#menu a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("ativo");
        botaoMenu.textContent = "☰";
        botaoMenu.setAttribute("aria-expanded", "false");
    });
});

// Mensagem de inicialização
console.log("Portfólio carregado com sucesso!");
