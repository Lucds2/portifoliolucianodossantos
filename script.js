function toggleMenu() {
        const menu = document.getElementById("navMenu");
        menu.classList.toggle("show");
      }
      function enviar(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const mensagem = document.getElementById("mensagem").value;
        const telefone = "5541984000638";
        const texto = `Olá, me chamo ${nome}, ${mensagem}`;
        const msgFormatada = encodeURIComponent(texto);
        const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

        window.open(url, "_blank");
      }