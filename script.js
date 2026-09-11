document.addEventListener('DOMContentLoaded', () => {

  window.toggleSubMenu = function (boton) {
    const li = boton.closest('li');
    if (li) li.classList.toggle('activo');
  };


  const botones = document.querySelectorAll('.like-btn');

  // Recuperar favoritos guardados en localStorage
  const favoritosGuardados = JSON.parse(localStorage.getItem('favoritos')) || [];

  botones.forEach((boton, index) => {
    boton.dataset.index = index;
    const icono = boton.querySelector('i');

    if (favoritosGuardados.includes(index)) {
      boton.classList.add('activo');

      if (icono) {
        icono.classList.remove('far');
        icono.classList.add('fas');
      }
    }

    boton.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const esFavorito = boton.classList.toggle('activo');

      if (icono) {
        if (esFavorito) {
          icono.classList.remove('far');
          icono.classList.add('fas');
          animarCorazon(boton);
        } else {
          icono.classList.remove('fas');
          icono.classList.add('far');
        }
      }

      actualizarFavoritos();
    });
  });


  function actualizarFavoritos() {
    const activos = [];

    document.querySelectorAll('.like-btn').forEach((btn, i) => {
      if (btn.classList.contains('activo')) activos.push(i);
    });

    localStorage.setItem('favoritos', JSON.stringify(activos));

    const contador = document.getElementById('num-favoritos');

    if (contador) contador.textContent = activos.length;
  }


  function animarCorazon(boton) {
    boton.classList.add('pop');

    setTimeout(() => {
      boton.classList.remove('pop');
    }, 400);
  }


  actualizarFavoritos();


  // ========================================
  // BADGE FLIP-FLOP
  // ========================================

// ========================================
// BADGE FLIP-FLOP DESINCRONIZADO
// ========================================

const badges = document.querySelectorAll('.badge');

badges.forEach(badge => {

  function cambiarBadge() {

    badge.classList.toggle('flipped');

    // Cada producto tendrá un tiempo diferente
    const tiempo = Math.floor(Math.random() * 3000) + 3000;

    setTimeout(cambiarBadge, tiempo);
  }

  // Cada badge comienza en un momento diferente
  const retrasoInicial = Math.floor(Math.random() * 4000);

  setTimeout(cambiarBadge, retrasoInicial);

});

});