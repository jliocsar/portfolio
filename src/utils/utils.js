import contactHandler from 'Components/contact/index';

/**
 * Method to the scroll animation
 */
function scrollAnimations() {
  const animateElements = document.querySelectorAll('[data-scroll-animate="on"]');
  const { innerHeight: windowHeight } = window;
  const heightIncrement = 100; // change this to preference of when it should start

  animateElements.forEach((element) => {
    const { top: elementTop } = element.getBoundingClientRect();

    if (elementTop + heightIncrement < windowHeight) {
      if (element.classList.contains('waiting')) {
        element.classList.remove('waiting');
        setTimeout(contactHandler(), 400);
      } else {
        const animDirection = element.getAttribute('data-animate-from');
        element.classList.add(`animate-from-${animDirection}`);
      }
    }
  });
}

function scrollSpy(e) {
  const SECTIONS = document.querySelectorAll('[data-scrollspy="true"]');
  const { scrollTop: pageTop } = e.target.scrollingElement;

  /* eslint-disable no-param-reassign */
  SECTIONS.forEach((section) => {
    const heightAdjustment = 175;
    const { offsetTop: sectionOffset, offsetHeight: sectionHeight } = section;

    // heightAdjustment was used just to adjust the exact position where it should
    // change the anchor style. Can be changed later
    if (pageTop >= sectionOffset - heightAdjustment
      && pageTop <= sectionOffset + sectionHeight - heightAdjustment) {
      // Using a generic name & selector for the menu items so its better to
      // use it somewhere else later
      const menuItems = document.querySelectorAll('nav a');
      const currentId = section.id;

      // Iterate over all menu items to reset its normal state
      menuItems.forEach((item) => item.classList.remove('active'));

      // Select the current anchor by its id
      const sectionAnchor = document.querySelector(`a[href="#${currentId}"]`);

      // Add the class to the current section on screen
      sectionAnchor.classList.add('active');

      const originalId = currentId;
      section.id = `${originalId}-tmp`;
      window.location.replace(`/#${originalId}`);
      section.id = originalId;
    }
  });
  /* eslint-enable no-param-reassign */
}

export function toggler(element, ...args) {
  return args.forEach((arg) => element.classList.toggle(arg));
}

export default function pageScrollHandler() {
  document.addEventListener('DOMContentLoaded', scrollAnimations, false);
  if (window.innerWidth > 768) {
    document.addEventListener('scroll', scrollAnimations, false);
    document.addEventListener('scroll', scrollSpy, false);
  } else {
    contactHandler();
  }
}
