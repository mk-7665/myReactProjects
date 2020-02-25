import React from 'react';
import PropTypes from 'prop-types';

// destructuring from a props object, defaultProps (defined below). Pulling out icon and title.

const Navbar =({icon, title }) => {
// reminder: like regular js, you don't need "this" when inside a function.
        return (
            <nav className="navbar bg-primary">
                <h1>
                    {/* props passed in from parent.
                    you can pass css classes as props instead of writing out the class. 
                    It's good practice because css classes can change. */}
                    <i className={icon} /> {title}
                </h1>
            </nav>
        )
}

// you can set default props as an object. They will render if parent component didn't pass anything.
Navbar.defaultProps = {
    title: "GitHub Search",
    icon: "fab fa-github"
};

// PropTypes defines the data type of props. If the wrong data type is passed in, an error message will show up in console
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
