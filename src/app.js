import menuHandler from 'Components/menu/index';
import homeHandler from 'Components/home/index';
import projectsHandler from 'Components/projects/index';
import pageScrollHandler from 'Utilities/utils';
import { library, dom } from '@fortawesome/fontawesome-svg-core';

// Importing only the icons that are used
import {
  faHome,
  faQuestion,
  faProjectDiagram,
  faAddressCard,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faCodepen,
  faTwitter,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons';

/**
 * Add NODE_ENV=production to build:css command whenever goes to production
 * Meanwhile, just playing with Tailwind CSS and Pug templates
 */
(function init() {
  menuHandler();
  homeHandler();
  projectsHandler();
  pageScrollHandler();

  const icons = [
    faHome,
    faQuestion,
    faProjectDiagram,
    faAddressCard,
    faHeart,
    faGithub,
    faCodepen,
    faTwitter,
    faWordpress,
  ];

  library.add(...icons);
  dom.watch();
}());
