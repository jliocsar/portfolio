/* eslint-disable */
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssimport = require('postcss-import');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    postcssimport,
    autoprefixer,
    tailwindcss,
    cssnano({
      preset: 'default',
    }),
  ],
};
