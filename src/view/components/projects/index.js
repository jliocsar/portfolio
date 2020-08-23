import axios from 'axios';

import Projects from './Projects';
import * as template from './_projects_cards.pug';

/**
 * Async function to get all projects from the API
 */
async function getLocals() {
  const url = 'https://api-projects.now.sh/api/project-list';
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'json' },
    url,
  };

  let output = null;

  try {
    const res = await axios(options);
    output = res.request.response;
  } catch (error) {
    output = error;
  }

  return JSON.parse(output);
}

/**
 * Projects Section Handler
 */
export default async function projectsHandler() {
  // Instantiate a projects component object
  const PROJECTS = new Projects();
  const locals = await getLocals();

  PROJECTS.article.innerHTML = template(locals);
}
