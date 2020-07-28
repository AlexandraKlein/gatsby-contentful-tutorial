import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import img from "../images/image4.jpg"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image3.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 400, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image1.jpg" }) {
      childImageSharp {
        fluid(traceSVG: { color: "darkblue" }) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    example: file(relativePath: { eq: "image2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
        <img alt="Ocean" width="100%" src={img} />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>Fixed Image/Blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>Fluid Image/SVG</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>Fluid Image/SVG Max Width</h3>
        <Image fluid={data.example.childImageSharp.fluid} />
        <h2>Content</h2>
      </article>
    </section>
  )
}

export default Images
