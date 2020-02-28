import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ hide, sel }) => {
  return (
    <header>
      <div className={"container flex-row " + (hide ? "hidden" : "show")}>
        <div className="logo haf">
          <Link to="/" id="logo-text" className={!!sel ? "active" : ""}>
            BOYLE JOSEPH
          </Link>
        </div>

        <nav className={"haf"}>
          <ul id={"header-nav"} className="unstyled">
            <li className="dropdown-container link">
              <Link
                to={"/works"}
                className={"link-text" + (sel === "works" ? " active" : "")}
              >
                {" "}
                My work{" "}
              </Link>
              <div className="dropdown-menu list-group">
                <div className="list-group-item">
                  <Link className={"link-text"} to={"/works/prose"}>
                    Prose
                  </Link>
                </div>
                <div className="list-group-item">
                  <Link className={"link-text"} to={"/works/poetry"}>
                    Poetry
                  </Link>
                </div>
                <div className="list-group-item">
                  <Link className={"link-text"} to={"/works/shorts"}>
                    Shorts
                  </Link>
                </div>
              </div>
            </li>
            <li className="link">
              <Link
                to={"/about"}
                className={"link-text" + (sel === "about" ? " active" : "")}
              >
                About me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
