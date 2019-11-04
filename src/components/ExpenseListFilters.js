import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters'
import {DateRangePicker} from "react-dates";


class ExpenseListFilters extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            focused: null
        }
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onDateChange({startDate, endDate}){
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange(focused){
        this.setState(()=>({focused}));
    }

    render() {
      return (
            <div>
            <input 
                type="text" 
                value={this.props.filters.text} 
                onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }} 
                    
            />
            <select 
                value={this.props.filters.sortBy}
                onChange={(e) => {
                    if(e.target.value === 'date')
                    {
                        this.props.dispatch(sortByDate());
                    }
                    else if(e.target.value === 'amount'){
                        this.props.dispatch(sortByAmount())
                    }
            }}
            >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker 
                startDate={this.props.filters.startDate}
                startDateId="startDate"
                endDate={this.props.filters.endDate}
                endDateId="endDate"
                onDatesChange={this.onDateChange}
                focusedInput={this.state.focused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={()=> {return false}}
            />
        </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};


export default connect(mapStateToProps)(ExpenseListFilters);