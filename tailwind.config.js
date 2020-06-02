module.exports = {
  purge: {
    mode: 'all',
    content: [
      './src/**/*.js',
      './src/**/*.pug',
    ],
  },
  theme: {
    fontFamily: {
      mono: ['DM Mono', 'Courier', 'monospace'],
    },
    extend: {
      colors: {
        black: '#111114',
        darkgray: '#141417',
        gray: '#222224',
        lightgray: '#cccccc',
        white: '#e4e4eb',
      },
    },
  },
};
