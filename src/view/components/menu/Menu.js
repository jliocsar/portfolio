/**
 * Default class for Menu
 */
export default class Menu {
  constructor() {
    this.header = document.querySelector('header');
    this.nav = this.header.querySelector('nav');
    this.isMobile = window.innerWidth < 768;
    this.button = this.isMobile ? this.header.querySelector('button') : null;
  }

  toggleMenu() {
    this.header.classList.toggle('active');
    this.nav.classList.toggle('hidden');
  }
}
