module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    desc: 'Default blog description'
  },
  // pathPrefix: '/gatsby-blog',
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'cp7t3h1s3hyw',
        accessToken: 'af293d26628b8c762a50e0cfb80640992059b2dbf0044090e15357926f477eaf'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark'
  ]
}
