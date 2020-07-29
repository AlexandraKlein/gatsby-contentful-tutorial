import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"

const ProductTemplate = ({
  data: {
    product: {
      title,
      price,
      image: { fluid },
      info: { info },
    },
  },
}) => {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">Back to Products</Link>
        <h1>Single Product: {title}</h1>
      </div>
      <section className="single-product">
        <Image fluid={fluid} alt={title} />
        <article>
          <h1>{title}</h1>
          <h3>${price}</h3>
          <p>{info}</p>
          <button>Add to Cart</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      price
      title
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      info {
        info
      }
    }
  }
`

export default ProductTemplate
