import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';

import { create } from 'domain';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);    
        console.log(props.expense); 
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focused: false,
            error: ""
        }
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChanged = this.onFocusChanged.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onSubmit(e){
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(()=>({error: "Please provide Description and Amount"}));

        }
        else {
            console.log("Submitted");
            this.setState(()=>({error: ""}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }

    }

    onDescriptionChange(e){
        const description = e.target.value;
        this.setState(() => ({description}))
    };

    onTextAreaChange(e) {
        const note = e.target.value 
        this.setState(() => ({note}))
    };

    onAmountChange(e) {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
          }
    };

    onDateChange(createdAt) {
        if(createdAt){
          this.setState(()=>({createdAt}));  
        }
        
    };

    onFocusChanged({focused}){
        this.setState(()=>({focused}))
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Description" autoFocus 
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input type="text" value={this.state.amount} placeholder="Amount" 
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                      date={this.state.createdAt}
                      onDateChange={this.onDateChange}
                      focused = {this.state.focused}
                      onFocusChange = {this.onFocusChanged}
                      numberOfMonths={1}
                      isOutsideRange={() => {false}}           
                    />
                    <textarea placeholder="Add Note (optional)"
                            onChange={this.onTextAreaChange}>
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>

        )
    }
}

export default ExpenseForm
