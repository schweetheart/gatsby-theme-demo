module.exports = {
  plugins: [
    { resolve: `gatsby-theme-2`, options: {} },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
};
