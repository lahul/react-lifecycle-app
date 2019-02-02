import React from 'react';
import {Link} from 'react-router-dom';

const Profile = (props) =>{
    console.log(props);
    const redir = () =>{
        props.history.push('/')
    }
    return (
        <div>
            <Link to={{
                pathname: `${props.match.url}/posts`
            }}>Take me to Profile/posts</Link>
            
            {redir()}
        </div>
    )
}

export default Profile;