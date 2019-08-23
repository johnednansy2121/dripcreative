import React from "react"

const Sidenav = (props) => {
    return <nav className={ `sidenav ${props.isToggle ? 'open' : ''}` }>
                <div className="side-container">
                    <ul className="menu">
                        <li className="menu-item">
                            <a href="/" aria-current="page">homepage</a>
                        </li>
                        {/* <li className={ `menu-item menu-sub ${props.isStaff ? 'active' : ''}` }>
                            <a href="/">Staff Finder</a>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="/">DripCreative IT Designer</a></li>
                                <li className="menu-item"><a href="/">DripCreative IT Developer</a></li>
                                <li className="menu-item"><a href="/">Insight IT designer</a></li>
                                <li className="menu-item"><a href="/">contact us</a></li>
                                <li className="menu-item"><a href="/">Insight It Developer</a></li>
                                <li className="menu-item"><a href="/">Insight IT Va</a></li>
                            </ul>
                            <span className="menu-toggle-sub" onClick={ props.staffToggle }>{ props.isStaff ? '-' : '+' }</span>
                        </li> */}
                        <li className="menu-item"><a href="/">Services</a></li>
                        <li className={ `menu-item menu-sub ${props.isCase ? 'active' : ''}` }>
                            <a href="/">Case Study</a>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="/">Wedbooker</a></li>
                            </ul>
                            <span className="menu-toggle-sub" onClick={ props.caseToggle }>{ props.isCase ? '-' : '+' }</span>
                        </li>
                        <li className="menu-item"><a href="/">contact us</a></li>
                    </ul>
                </div>
                <div className="menu-toggle toggle-close" onClick={ props.closeToggle }><span></span></div>
            </nav>
}

export default Sidenav