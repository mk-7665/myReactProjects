import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
    //ideally, you'd get this data from an api to populate the state
    state = {
        users: [
            {
                id: '1',
                login: "mojombo",
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                html_url: "https://github.com/mojombo"
            
            },
            {
                id: '2',
                login: "defunkt",
                avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
                html_url: "https://github.com/defunkt"
            
            },
            {
                id: '3',
                login: "pjhyett",
                avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
                html_url: "https://github.com/pjhyett"
            
            }         
        ]
    };

    render() {
        // rendering each item in the this.state.users array
        // userStyle is a css class declared in component
        return (
            <div style={userStyle}>
                {/* each child in a list should have a unique key prop, like key=user.id */}
                {/* pass in the entire user, already rendered from UserItems  */}
                {this.state.users.map(user => (
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
