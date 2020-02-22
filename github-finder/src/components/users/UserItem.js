import React, { Component } from 'react'

class UserItem extends Component {
    // adding state here will override props. Don't do it unless you know what you're doing.

    // you can add inline styles to jsx, with {{ }}. But it's not reccommended.
    render() {
        // pulling stuff out from the this.props.user object, inherited from parent, Users
        // style and render each user from this.props
        const { login, avatar_url, html_url } = this.props.user;
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
}

export default UserItem
