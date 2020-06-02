/**
 * Default class for Home
 */
export default class Home {
  constructor(text) {
    this.text = text;
    this.array = [...this.text];
    this.length = this.array.length;
    this.title = document.querySelector('main section#home h1');
  }

  /**
   * Recursive function to typewrite the text into this.title
   * @param {Number} length the total length of the text to be written
   * @param {Number} word the current index (current word)
   */
  typeWrite(textLength, word) {
    if (textLength === 0) {
      return '';
    }

    // Timeout for the text typing
    const currentText = setTimeout(() => {
      this.title.innerHTML += this.array[word];

      const waitAgain = word === 6;

      if (waitAgain) {
        // If text reaches the end of 'Hello!', then wait again;
        setTimeout(() => {
          this.typeWrite(textLength - 1, word + 1);
        }, 700);
        // Else go on
      } else {
        this.typeWrite(textLength - 1, word + 1);
      }
    }, 100);

    return currentText;
  }
}
