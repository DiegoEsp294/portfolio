import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Portfolio.
          </div>
          <div className="links-wrapper">
            <button style={{color:'white', fontSize:'17px'}} onClick={() => scrollTo("#work")}>Work</button>
            <button style={{color:'white', fontSize:'17px'}} onClick={() => scrollTo("#about")}>About</button>
            <button style={{color:'white', fontSize:'17px'}} onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
