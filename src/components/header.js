import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import Logo from "./logo"
import Sidenav from "./sidenav"

class Header extends Component {
  constructor (props) {
    super();

    this.state = {
      scroll: false,
      toggle: false,
      dropdowns: {
        services: false,
        case_study: false,
      }
    }

    this.openToggle = this.openToggle.bind(this);
    this.closeToggle = this.closeToggle.bind(this);
    this.servicesToggle = this.servicesToggle.bind(this);
    this.caseToggle = this.caseToggle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  openToggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }

  closeToggle = () => {
    this.setState({ toggle: false })
  }

  servicesToggle = () => {
    this.setState(prevState => ({
      dropdowns: {
        services: !prevState.dropdowns.services
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

  handleScroll = () => {
    this.setState({ scroll: (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) });
  }

  render () {
    return (
      <>
      <div className={ `overlay ${this.state.toggle ? 'active' : ''}` }></div>
      <header className={ `header ${ this.state.scroll ? 'p-0 shadow' : '' }` }>
        <div className="container">
          <nav className="navbar navbar-light bg-transparent">
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
        <Sidenav isToggle={this.state.toggle} closeToggle={ this.closeToggle } servicesToggle={ this.servicesToggle } caseToggle={ this.caseToggle } isServices={ this.state.dropdowns.services } isCase={ this.state.dropdowns.case_study } />
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
