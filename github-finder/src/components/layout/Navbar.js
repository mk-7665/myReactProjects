import React, { Component } from 'react'

// This is a react component 
export class Navbar extends Component {
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
