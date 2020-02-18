import React, { Component } from 'react';
import PropTypes from 'prop-types';


// This is a react component 
export class Navbar extends Component {
    // you can set default props as an object. They will render if parent component didn't pass anything.
    static defaultProps = {
        title: "GitHub Search",
        icon: "fab fa-github"
    };

    // PropTypes defines the data type of props. If the wrong data type is passed in, an error message will show up in console
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    {/* to access props from the parent, use this.props, then the property name.
                    you can pass css classes as props instead of writing out the class. 
                    It's good practice because css classes can change. */}
                    <i className={this.props.icon} /> {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
