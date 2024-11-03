// funcoes para abrir e fechar o menu
function openSideMenu() {
  document.getElementById("sideMenu").style.width = "250px";
}

function closeSideMenu() {
  document.getElementById("sideMenu").style.width = "0";
}

$(document).ready(function () {
  $('.d-flex').click(function () {
    $(this).find('.arrow-icon').toggleClass('rotate');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function toggleResposta(pergunta) {
  const resposta = pergunta.nextElementSibling;
  if (resposta.style.display === "none") {
    resposta.style.display = "block";
  } else {
    resposta.style.display = "none";
  }
}