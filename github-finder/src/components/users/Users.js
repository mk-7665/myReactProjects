import React, { Component } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

//pulling out users, loading from props 
//changed Users to a functional component
const Users = ({ users, loading }) => {
    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {/* each child in a list should have a unique key prop, like key=user.id */}
                {/* get users object from this.props, pass in the entire user to UserItem  */}
                {users.map(user => (
                <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

// ideally, you'd add this styling in App.css, but here's how to add a css class in a component
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
