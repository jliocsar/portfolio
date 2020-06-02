import Menu from './Menu';
import * as template from './_menu_items.pug';

/**
 * Get all menu items as locals for the menu composition
 */
function getLocals() {
  return {
    items: [
      {
        title: 'Home',
        ref: '#home',
        icon: 'fas fa-home',
      },
      {
        title: 'About',
        ref: '#about',
        icon: 'fas fa-question',
      },
      {
        title: 'My Projects',
        ref: '#projects',
        icon: 'fas fa-project-diagram',
      },
      {
        title: 'Contact Me',
        ref: '#contact',
        icon: 'fa fa-address-card',
      },
    ],
  };
}

/**
 * Initialize Mobile Menu method
 */
export default function menuHandler() {
  // Instantiate a menu component object
  const MENU = new Menu();

  // Get all menu items to be insert
  const locals = getLocals();
  MENU.nav.innerHTML += template(locals);

  // Initialize the mobile menu button
  if (MENU.isMobile) {
    MENU.button.addEventListener('click', () => MENU.toggleMenu(), false);
    const nav = MENU.nav.querySelectorAll('a');
    // Initialize the anchors action to close the menu on click
    nav.forEach((anchor) => {
      anchor.addEventListener('click', () => MENU.toggleMenu(), false);
    });
  }
}
