<div align="center">
	<a href="https://portfolio.juliocesarmfo.now.sh">
		<img width="250" src="https://portfolio.juliocesarmfo.now.sh/cd705f7d6a59bc2a99cd248a309eaeb1.svg" />
	</a>
</div>
<h1 align="center">
	Julio Cesar | Portfolio
</h1>

<p align="center">
	<img src="https://badgen.net/github/status/juliocesarmfo/portfolio" />
	<img src="https://badgen.net/github/commits/juliocesarmfo/portfolio?color=purple" />
	<img src="https://badgen.net/github/last-commit/juliocesarmfo/portfolio?color=cyan" />
	<img src="https://badgen.net/badge/babel/7.9.6/black" />
	<img src="https://badgen.net/badge/tailwindcss/1.4.6/blue" />
	<img src="https://badgen.net/badge/pug/2.0.4/pink" />
</p>

<h2> Hello! 👨‍💻</h2>

Welcome to my personal portfolio!

This is my first project ever made, and it's a portfolio ironically. Had fun building it and I hope you like it.  

For now, the portfolio is done. I have an API endpoint for the projects section too, so it's easier to add, update and delete my projects listed on the website.

I tried to make this as "free software" as possible, thus why I only used free fonts and icons. The "page-breakers" SVGs were made in Inkscape.

Wolf icon made by [Freepik](https://freepik.com/)

Feel free to message me on Twitter if you'd like to talk to me:
[@juliocesarmfo](https://twitter.com/juliocesarmfo)

Live preview:
https://portfolio.juliocesarmfo.now.sh  

<h2> Built with 🚀</h2>

This project was possible thanks to:

- [Tailwind CSS](https://tailwindcss.com/)

- [Pug](https://pugjs.org/)

- [Webpack](https://webpack.github.io/)

- [Babel](https://babeljs.io/)

<h2> Scripts 📜</h2>

Build Core CSS in Production Mode:

    "prod:css": "NODE_ENV=production postcss src/core/tailwind.css -o src/core/core.css && postcss src/index.css -o dist/bundle.css"
Build App in Production Mode:

    "prod:app": "webpack --mode production"

Build Core CSS in Development Mode (does not purge Tailwind CSS unused styles):

    "dev:css": "postcss src/core/tailwind.css -o src/core/core.css && postcss src/index.css -o dist/bundle.css"

Build App in Development Mode (watching changes):

	"dev:app": "webpack --watch --mode development"

Start Webpack Dev Server:

	"server": "webpack-dev-server"  

<h2> Running locally 🏡</h2>

To run the project locally, you can run <code>npm install</code> in the root folder of the project, and then <code>npm run server</code> after it installed all dependencies.

If the CSS of the web page is clunky, then run <code>npm run prod:css</code> and that should do the trick.

*Cya!*
