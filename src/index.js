import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'

//Components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';
import Life from './components/Lifecycle';
import Conditional from './components/Conditional'
import User from './components/User';

//myawesomeapp.com/posts
//myawesomeapp.com/profile/posts

const App = () =>{
    return (
        <BrowserRouter>
           <div>
            <header>
                <NavLink to='/'>Home</NavLink><br/>
                <NavLink 
                to='/posts'
                activeStyle={{color:"red"}}
                activeClassName="selected"
                >Posts</NavLink><br/>
                <NavLink to={{
                    pathname: '/profile'
                }}>Profile</NavLink><br/>
                <NavLink to='/life'>Life</NavLink><br/>
                <NavLink to='/conditional'>Conditional</NavLink><br/>
                <NavLink to='/user'>User</NavLink>
                <hr />
            </header>
            <Switch>
            
            <Route path="/posts/:id/:username" component={PostItem}/>
            <Route path='/posts'  component={Posts}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/conditional' component={Conditional}/>
            <Route path='/life' component={Life}/>
            <Route path='/user'  component={User}/>
            <Route path='/'  exact component={Home}/>
            <Route render={() =>{return(<h3>Error</h3>)}} />
            </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)