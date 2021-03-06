import React from 'react';
import PropTypes from 'prop-types'


const Navbar = (props) => {
    
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={props.icon}></i>  {props.title}
            </h1>     
        </nav>
    )
}
Navbar.defaultProps = {
    icon: "fab fa-github",
    title: "Github Finder"
}
Navbar.propTypes = {
    icon: PropTypes.string.isRequired
}
export default Navbar;