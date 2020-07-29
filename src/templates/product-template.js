import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

export class productTemplate extends Component {
  state = {
    offset: 0,
  }

  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset,
    })
  }

  componentDidMount() {
    window.addEventListener("scroll", this.parallaxShift)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.parallaxShift)
  }

  render() {
    console.log(this.state)
    const {
      data: {
        product: {
          title,
          price,
          image: { fluid },
          info: { info },
        },
      },
    } = this.props
    return (
      <Layout>
        <div style={{ textAlign: "center" }}>
          <Link to="/products">Back to Products</Link>
        </div>
        <section className="single-product">
          {/* <Image fluid={fluid} alt={title} /> */}
          <article>
            <BackgroundImage
              style={{
                backgroundPosition: `center -${this.state.offset / 4}px`,
              }}
              fluid={fluid}
              className="gatsby-background-image"
            />
          </article>
          <article style={{ padding: "2rem" }}>
            <h1>{title}</h1>
            <h3>${price}</h3>
            <p>{info}</p>
            <button>Add to Cart</button>
          </article>
        </section>
      </Layout>
    )
  }
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

export default productTemplate
