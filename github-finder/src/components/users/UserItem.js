import React, { Component } from 'react';
import PropTypes from 'prop-types';

//structure of a functional component - good for stateless components and handy for hooks
//{ destructuring } from a passed in props object, user. From user: pull out login, avatar_url, html_url

const UserItem = ({user: {login, avatar_url, html_url}}) => {
    // you can add inline styles to jsx, with {{ }}. But it's not reccommended.
        // pulling stuff out from the props.user object, inherited from parent, Users
        // style and render each user for each prop object passed in
        return (
            <div className="card text-center">
                <img 
                    src={avatar_url} 
                    alt="" 
                    className="round-img" 
                    style={{ width: '60px' }} />

                <h3>{login}</h3>

                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">
                        Go to Profile
                    </a>
                </div>
            </div>
        )
}
// declaring the prop type of prop "user"
UserItem.propTypes = {
    //'ptor' is the shortcut in emmet
    user: PropTypes.object.isRequired
}

export default UserItem
