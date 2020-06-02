import Home from './Home';

/**
 * Initialize the Home Section method
 */
export default function homeHandler() {
  // Instantiate a home component object
  const HOME = new Home('Hello! I am Julio Cesar.');
  // Get the total length of characters in the text string
  const { length } = HOME;

  // Resets title tag inner text to empty
  HOME.title.innerHTML = '';

  // Start to typewrite
  HOME.typeWrite(length, 0);
}
