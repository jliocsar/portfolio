# Personal Portfolio  

## Hello, fella

Welcome to my personal portfolio!

This is my first project ever made, and it's a portfolio ironically. Had fun building it and I hope you like it.

For now, the portfolio is done. Now I need to build an API endpoint for the projects, so it's easier to add, update and delete my projects listed on the website.

I tried to make this as "free software" as possible, thus why I only used free fonts and icons. The "page-breakers" SVGs were made in Inkscape.

Feel free to message me on Twitter if you'd like to talk to me:

[@juliocesarmfo](https://twitter.com/juliocesarmfo)

See it live at:

https://portfolio.juliocesarmfo.now.sh

## Built with

This project was possible thanks to:

- [Tailwind CSS](https://tailwindcss.com/)

- [Pug](https://pugjs.org/)

- [Webpack](https://webpack.github.io/)

- [Babel](https://babeljs.io/)

## Scripts

"prod:css": "NODE_ENV=production postcss src/core/tailwind.css -o src/core/core.css && postcss src/index.css -o dist/bundle.css",

"prod:app": "webpack --mode production",

"dev:css": "postcss src/core/tailwind.css -o src/core/core.css && postcss src/index.css -o dist/bundle.css",

"dev:app": "webpack --watch --mode development",

"server": "webpack-dev-server"

- *prod:css* is used to purge all unused TailwindCSS styles, also minifying the CSS bundle;

- *prod:app* is to build the app in production mode;

- *dev:css* is to simply bundle the Tailwind core with the custom.css files (takes a while);

- *dev:app* is the default build app script;

- *server* is used to run the hot-reload server from Webpack.

## Running locally

To run the project locally, you can run

    npm install
in the root folder of the project, and then

    npm run server
after it installed all dependencies.
If the CSS of the web page is clunky, then run

    npm run prod:css
and that should do the trick.

*Cya!*
