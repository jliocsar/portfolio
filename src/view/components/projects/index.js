import Projects from './Projects';
import * as template from './_projects_cards.pug';

/**
 * Will be replaced by API endpoint later
 */
function temporaryLocals() {
  const locals = fetch('./projects_cards.json').then((res) => {
    const body = res.json();
    return body;
  }).catch((error) => {
    throw error;
  });
  return locals;
}

/**
 * Projects Section Handler
 */
export default async function projectsHandler() {
  // Instantiate a projects component object
  const PROJECTS = new Projects();
  const locals = await temporaryLocals();

  PROJECTS.article.innerHTML = template(locals);
}
