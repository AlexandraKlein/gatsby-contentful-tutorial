import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => (
  <div>
    <h2>{data.product.title}</h2>
    <h2>{data.product.price}</h2>
  </div>
)

export const query = graphql`
  {
    product: contentfulProduct(slug: { eq: "sectional-sofa" }) {
      price
      title
    }
  }
`

export default ComponentName
