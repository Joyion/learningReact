import React from 'react';
import {connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses"
import getExpensesTotal from "../selectors/getExpensesTotal"

const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? "expense" : "expenses";
    const formatExpense = numeral(expensesTotal / 100).format("$0,0.00");
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formatExpense} </h1>
        </div>
    )

}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    
    return {
         expenseCount: visibleExpenses.length,
         expensesTotal: getExpensesTotal(visibleExpenses)
    }   
};

export default connect(mapStateToProps)(ExpensesSummary);

