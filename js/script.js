
function fitHeroRows() {

  const rows = document.querySelectorAll('.hero-row');

  rows.forEach((row) => {

    // Tamaño inicial grande
    let fontSize = 300;

    row.style.fontSize = fontSize + 'px';

    // Anchura disponible
    const availableWidth = row.parentElement.offsetWidth;

    // Reducir hasta encajar
    while (row.scrollWidth > availableWidth && fontSize > 10) {

      fontSize--;

      row.style.fontSize = fontSize + 'px';

    }


  });

}


function animateHero() {

  const heroLinks = Array.from(document.querySelectorAll('.hero a'));

  // Mezclar aleatoriamente
  heroLinks.sort(() => Math.random() - 0.5);

  heroLinks.forEach((link, index) => {

    setTimeout(() => {

      link.classList.add('show');

    }, index * 20);

  });
}



fitHeroRows();
animateHero();



window.addEventListener('resize', fitHeroRows);


