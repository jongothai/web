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

window.addEventListener('load', fitHeroRows);
window.addEventListener('resize', fitHeroRows);