module.exports = function(config) {
  config.addFilter('spannup', s => {
    return s
      .split(' ')
      .map(_ => `<span class="word">${_}</span>`)
      .join(' ');
  });
  config.addPassthroughCopy('./assets');
};
