import React from 'react';
import './Nav.scss';

// Import React Router Dom using Link & NavLink
import {
    Link,
    NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                {/* Using tag <Link> */}
                {/* 
                <Link to="/">Home</Link>
                <Link to="/todos">Todos</Link>
                <Link to="/about">About</Link> */}

                {/* Using tag <NavLink> */}
                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to="/todos" activeClassName="active">Todos</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
                <NavLink to="/user" activeClassName="active">User</NavLink>
            </div>
        )
    }
}

export default Nav;