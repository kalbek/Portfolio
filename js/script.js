(function main () {
  const openMenu = document.getElementById('open-mobile-menu');
  const closeMenu = document.getElementById('close-mobile-menu');
  const mobilePortfolio = document.getElementById('mobile-portfolio');
  const mobileAbout = document.getElementById('mobile-about');
  const mobileContact = document.getElementById('mobile-contact');

  function closeMobileMenu() {
    const mobileMenu = document.querySelector('#mobile-menu-active');
    mobileMenu.classList.remove('visible');
    mobileMenu.classList.add('hidden');
  }

  openMenu.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu-active');
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('visible', 'animate-from-top');
  });

  closeMenu.addEventListener('click', () => {
    closeMobileMenu();
  });

  mobilePortfolio.addEventListener('click', () => {
    closeMobileMenu();
  });

  mobileAbout.addEventListener('click', () => {
    closeMobileMenu();
  });

  mobileContact.addEventListener('click', () => {
    closeMobileMenu();
  });
})();
