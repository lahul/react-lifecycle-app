import React from 'react';
import {Link} from 'react-router-dom';

import Card from './hoc/Card';
import Auth from './hoc/Auth';

const Profile = (props) =>{
    console.log(props);
    const redir = () =>{
        //props.history.push('/')
    }
    return (
        <Auth>
            <Card>
            <Link to={{
                pathname: `${props.match.url}/posts`
            }}>Take me to Profile/posts</Link>
            </Card>
        </Auth>
    )
}

export default Profile;