import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <div>
       <h2>Expense App</h2>
       <NavLink activeClassName="is-active"  exact={true} to="/">Home</NavLink>
       <NavLink activeClassName="is-active" to="/create">Create</NavLink>
       <NavLink activeClassName="is-active" to="/edit">Edit</NavLink>
    </div>
   
);

export default Header;