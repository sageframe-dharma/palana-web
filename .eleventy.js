module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('public/css');
  eleventyConfig.addPassthroughCopy('public/assets');
  eleventyConfig.addPassthroughCopy('public/favicon.svg');
  eleventyConfig.addPassthroughCopy('public/_redirects');

  return {
    templateFormats: ['njk', 'md'],
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'public',
      output: '_site',
    },
  };
};
