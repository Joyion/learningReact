import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom"
import moment from "moment";


const ExpenseListItem = ({dispatch, description, id, createdAt, amount}) => (
    <div>
        <Link to={"/edit/"+ id}>Edit</Link>
        <h1>{description}</h1>
        <p>{amount} - {createdAt} <span> { moment(createdAt).format('MMMM Do, YYYY')} </span></p>
    </div>

);

export default connect()(ExpenseListItem);