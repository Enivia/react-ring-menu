const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  rollup(config) {
    config.plugins.push(
      postcss({
        plugins: [autoprefixer()],
        extract: 'index.css',
        minimize: true,
      })
    );
    return config;
  },
};
