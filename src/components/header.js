import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import Logo from "./logo"
import Sidenav from "./sidenav"

class Header extends Component {
  constructor (props) {
    super();

    this.state = {
      toggle: false,
      dropdowns: {
        staff_finders: false,
        case_study: false,
      }
    }

    this.openToggle = this.openToggle.bind(this);
    this.closeToggle = this.closeToggle.bind(this);
    this.staffToggle = this.staffToggle.bind(this);
    this.caseToggle = this.caseToggle.bind(this);
  }

  openToggle = () => {
    this.setState({ toggle: true })
  }

  closeToggle = () => {
    this.setState({ toggle: false })
  }

  staffToggle = () => {
    this.setState(prevState => ({
      dropdowns: {
        staff_finders: !prevState.dropdowns.staff_finders
      }
    }))
  }

  caseToggle = () => {
    this.setState(prevState => ({
      dropdowns: {
        case_study: !prevState.dropdowns.case_study
      }
    }))
  }

  render () {
    return (
      <>
      <div className={ `overlay ${this.state.toggle ? 'active' : ''}` }></div>
      <header className="header">
        <div className="container">
          <nav className="navbar navbar-light bg-light">
              <div className="menu-toggle" onClick={ this.openToggle }>
                <span></span>
              </div>
              <div className="logo">
                <Link to="/">
                <Logo/>
                </Link></div>
              <a href="/" className="btn btn-black btn-glass">get in touch</a>
          </nav>
        </div>
        <Sidenav isToggle={this.state.toggle} closeToggle={ this.closeToggle } staffToggle={ this.staffToggle } caseToggle={ this.caseToggle } isStaff={ this.state.dropdowns.staff_finders } isCase={ this.state.dropdowns.case_study } />
      </header>
      </>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
