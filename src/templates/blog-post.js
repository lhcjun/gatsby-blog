import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
    // get query data
    const post = data.markdownRemark;

    return (
        <Layout>
            <div>
                <h1>{ post.frontmatter.title }</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

// query individual markdown > slug
export const query = graphql`
    query($slug: String!){
        # query   markdownRemark.fields.slug = $slug (passed from gatsby-node.js)
        markdownRemark( fields: { slug: { eq: $slug } }){
            html
            frontmatter {
                title
            }
        }
    }
`