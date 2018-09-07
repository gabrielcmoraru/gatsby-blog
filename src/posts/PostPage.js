import React, { Component } from 'react'

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <span>
        {data.contentfulBlogPost.date}
        </span>
        <h1>
        {data.contentfulBlogPost.title}
        </h1>
        <div dangerouslySetInnerHTML={{
          __html: data.contentfulBlogPost.body.childMarkdownRemark.html
        }}/>
      </div>
    )
  }
}

export const query = graphql `
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      id
      title
      body {
        childMarkdownRemark {
          html
          excerpt
        }
      }
      slug
    }
  }
`;