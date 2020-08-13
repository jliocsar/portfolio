import Contact from './Contact';

/**
 * Get all messages as locals for the contact section composition
 */
function getMessages() {
  const getAnchor = (url, destination) => `
    <a target="_blank" rel="noopener" href="${url}">
      <u>${destination}</u>
    </a>
  `;

  return [
    'Hey! Thanks for visiting my website',

    `If you're interested in contacting me, 
    you can send me a direct message on my 
    ${getAnchor('https://twitter.com/jliocsar/', 'Twitter')} or 
    my ${getAnchor('https://www.linkedin.com/in/jliocsar/', 'LinkedIn')}`,

    'Or you can click on the WhatsApp button to your right and message me',

    `Also, feel free to browse my creations on
    ${getAnchor('https://github.com/jliocsar/', 'Github')}
    and/or ${getAnchor('https://codepen.io/jliocsar/', 'Codepen.io')}`,

    'I hope you liked it 😄',

    'Bye!',
  ];
}

/**
 * Initialize Contact main method
 */
export default function contactHandler() {
  // Instantiate the contact messages object
  const CONTACT_MESSAGES = new Contact();
  const messages = getMessages();

  CONTACT_MESSAGES.listMessages(messages);
}
