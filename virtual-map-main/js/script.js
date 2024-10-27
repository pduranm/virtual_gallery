//Animación de fotos (Landing page)
document.addEventListener("DOMContentLoaded", function () {
  const textContainer = document.getElementById("textContainer");
  const texts = ["Virtual Gallery", "Pintura", "Escultura", "Arquitectura"]; // Agrega más textos según sea necesario
  let currentTextIndex = 0;

  function changeText() {
      textContainer.textContent = texts[currentTextIndex];
      currentTextIndex = (currentTextIndex + 1) % texts.length;
  }

  // Cambia el texto cada vez que la animación alcanza el 50%
  textContainer.addEventListener("animationiteration", changeText);
});

/////////////////////////////////////////////////////////////

/*nav mobile*/
function toggleMenu() {
  const mobileNav = document.querySelector('.mobile-nav');
  mobileNav.classList.toggle('active');
}



/////////////////////

const toggleBtn = document.getElementById('toggleBtn');
const navegacion = document.getElementById('navegacion');

toggleBtn.addEventListener('click', function() {
    navegacion.classList.toggle('mostrar');
});
