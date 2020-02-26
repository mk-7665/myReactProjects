import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {

    render() {
        // rendering each item in the this.state.users array
        // userStyle is a css class declared in component
        return (
            <div style={userStyle}>
                {/* each child in a list should have a unique key prop, like key=user.id */}
                {/* get users object from this.props, pass in the entire user to UserItem  */}
                {this.props.users.map(user => (
                <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

// ideally, you'd add this styling in App.css, but here's how to add a css class in a component
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
