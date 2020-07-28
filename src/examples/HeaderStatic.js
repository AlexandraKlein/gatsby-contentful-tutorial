import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
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
    `}
    render={data => (
      <div>
        <h4>{data.site.info.description}</h4>
      </div>
    )}
  ></StaticQuery>
)

export default ComponentName
