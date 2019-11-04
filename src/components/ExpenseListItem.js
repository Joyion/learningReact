import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom"
import moment from "moment";
import numeral from "numeral";


const ExpenseListItem = ({dispatch, description, id, createdAt, amount}) => (
    <div>
        <Link to={"/edit/"+ id}>Edit</Link>
        <h1>{description}</h1>
        <p>{numeral(amount / 100).format("$0,0.00")} - 
            <span> { moment(createdAt).format('MMMM Do, YYYY')} </span>
        </p>
    </div>

);

export default connect()(ExpenseListItem);