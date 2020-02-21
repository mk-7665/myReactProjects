import React, { Component } from 'react'

class UserItems extends Component {
    // state is just a js object. A place to keep data for a component at any given point.
    // you don't have to call a constructor. You can directly declare the state object.
    state = {
        id: 'id',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
    }

    // you can add inline styles to jsx, with {{ }}. But it's not reccommended.
    render() {
        // pulling stuff out from the this.state object
        const { login, avatar_url, html_url } = this.state;
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

export default UserItems
