import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name },
        description,
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>This is our Header</h1>
      <h2>Title: {title}</h2>
      <h2>Name: {name}</h2>
      <h2>Description: {description}</h2>
    </div>
  )
}

export default Header
