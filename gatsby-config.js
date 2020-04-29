module.exports = {
    siteMetadata: {
        title: `Adults Coloring Books`,
        description: `The best coloring book app for adults.`,
        author: `@pavelkukov`,
        siteUrl: `https://coloring-pages.tv`,
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `coloring-pages`,
                short_name: `coloring-pages`,
                start_url: `/`,
                background_color: `#999999`,
                theme_color: `#999999`,
                display: `minimal-ui`,
                icon: `src/images/icon-512x512.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
        `gatsby-plugin-sitemap`,
    ],
}
