import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import  './header.css'
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      position:"fixed",
      top:0,
      width:"100%"
    }}
  >
    <div
      style={{
        maxWidth: 960,
        display:'flex',
        flexDirection:'row',
        textAlign:'center',
        alignItems:'center',
       
      }}
    >
      <h3 className="heading-h1">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display:"inline-block"
          }}
        >
          {siteTitle}
        </Link>
      </h3>
      <ul className="list-ul">
        <li className="links"><Link activeClassName="active" to="/" className="links-a">Home</Link></li>
        <li className="links"><Link activeClassName="active" to="/popular" className="links-a">Popular Recipies</Link></li>
        <li className="links"><Link activeClassName="active" to="/contact" className="links-a">Contact Me</Link></li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
