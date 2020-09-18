import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PreFooter from "./PreFooter";
import Header from "./header"
import "./layout.css"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          // margin: `0 auto`,
          // maxWidth: 960,
          // padding: `0 1.0875rem 0.45rem`,
        }}
      >
        <main className="main-content">{children}</main>
        <PreFooter/>
        <footer>
          © {new Date().getFullYear()},
          Built With <span role="img" aria-label="heart-black">🖤</span> By Nadir Ali
        </footer>
      </div>
    </>
  )
}


export default Layout
