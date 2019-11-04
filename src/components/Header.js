import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <div>
       <h2>Expense App</h2>
       <NavLink activeClassName="is-active"  exact={true} to="/">View Expenses</NavLink>
       <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>
    </div>
   
);

export default Header;