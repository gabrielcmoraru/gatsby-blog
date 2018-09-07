import React from 'react';
import Link from 'gatsby-link';
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({data}) => (
  <div>
    <h2>Posts</h2>
    {data.allContentfulBlogPost.edges.map(({node}) => <PostListing key={node.id} post={node}/>
    )}
  </div>
)

export default IndexPage;

export const query = graphql`
query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          body {
              childMarkdownRemark {
                excerpt
            }
          }
          createdAt(formatString: "DD-MMMM YYYY")
          slug
        }
      }
    }
  }
`;
