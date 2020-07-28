import React from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        price
        title
        slug
        id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => (
          <article key={product.id}>
            <Image fluid={product.image.fluid} />
            <h3>
              {product.title} <span>${product.price}</span>
            </h3>
            <Link to={`/products/${product.slug}`}>More Details</Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export default products
