// Selecionando elementos
const menuMobile = document.querySelector(".menu-mobile");
const menuItems = document.querySelector(".menu-mobile-opcoes");

// Adicionando evento de clique
menuMobile.addEventListener("click", () => {
  // Alternando visibilidade do menu
  menuItems.style.display =
    menuItems.style.display === "block" ? "none" : "block";
});

// Fechando o menu quando clicar fora
document.addEventListener("click", (event) => {
  if (!menuMobile.contains(event.target) && !menuItems.contains(event.target)) {
    menuItems.style.display = "none";
  }
});

// Para direcionar aos tópicos do projeto
document.querySelectorAll(".menu-mobile-items a").forEach((link) => {
  link.addEventListener("click", function (e) {
    // Fecha o menu mobile após o clique
    menuItems.style.display = "none";

    // Garante que o link funcione
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  });
});
