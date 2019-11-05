const withSass = require('@zeit/next-sass');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const workshops = require('./src/components/workshops/data');

const workshopsPathMap = workshops.reduce((acc, { slug }) => {
  acc[`/workshop/${slug}`] = {
    page: '/workshop',
    query: { slug },
  };
  return acc;
}, {});

module.exports = withSass(
  withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    sassLoaderOptions: {
      outputStyle: 'expanded',
    },
    exportTrailingSlash: true,
    exportPathMap: async defaultPathMap => {
      return {
        ...defaultPathMap,
        ...workshopsPathMap,
      };
    },
  })
);
