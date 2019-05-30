/**
 *  Configure your Gatsby site with this file.
 *
 *  See: https://www.gatsbyjs.org/docs/gatsby-config/
 *
 *  Se her for info om de enkelte plug-ins:
 *     https://www.gatsbyjs.org/docs/adding-markdown-pages/
 */

module.exports = {

  // Installerede plug-ins:
  plugins: [

    { // Read files into Gatsby from the filesystem
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: "markdown-pages",
      },
    },

    // Netlify plugin
    `gatsby-plugin-netlify-cms`,

    // Transforming markdown: Will recognise files which are markdown and read their content. Will convert the frontmatter metadata part of your markdown file as frontmatter and the content part as HTML.
    `gatsby-transformer-remark`,

  ]
}
