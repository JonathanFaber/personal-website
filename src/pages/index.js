import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Bio from '../components/Bio'
import "../../scss/style.scss"

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <h1><strong>Jonathan Faber</strong></h1>
        <p>
          Welcome to my personal website. The blog was originally created to post 
          my Co-op workterm experiences. It will contain posts on anything that I
          find interesting.
        </p>

        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div>
              <div key={node.fields.slug} className="card">
                <div className="card-body">
                  <h3 className="card-title">
                    <Link to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small className="card-subtitle text-muted">{node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </div>
              </div>
              <br/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
