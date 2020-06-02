import { toggler } from 'Utilities/utils';

/**
 * Default class for Contact
 */
export default class Contact {
  constructor() {
    this.list = document.getElementById('all-messages');
  }

  listMessages(messages) {
    const { length } = messages;
    const isDesktop = window.innerWidth > 768;
    const desktopDelayValues = [
      2000, 3000, 2000, 2500, 2000, 1000,
    ];
    const delayList = isDesktop
      ? desktopDelayValues
      : Array(desktopDelayValues.length).fill(0);
    const writeMessage = (index = 0) => {
      if (index === length) {
        return;
      }

      const listItem = document.createElement('li');
      toggler(listItem, 'message', 'loading');
      const paragraph = document.createElement('p');
      paragraph.innerHTML = `
        <span>.</span>
        <span>.</span>
        <span>.</span>
      `.trim();
      listItem.appendChild(paragraph);
      this.list.appendChild(listItem);

      setTimeout(() => {
        paragraph.innerHTML = messages[index];
        toggler(listItem, 'loading', 'active');
        return writeMessage(index + 1);
      }, delayList[index]);
    };

    return writeMessage();
  }
}
