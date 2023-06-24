import React, { Component } from 'react';

import MonthYearPicker from 'react-month-year-picker';

export default class MonthCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: 10,
            year: 2018,
        };
    }
    render() {
        return (
            <div>
                <h3>Selected month: {this.state.month}</h3>
                <h3>Selected year: {this.state.year}</h3>
                <MonthYearPicker
                    selectedMonth={this.state.month}
                    selectedYear={this.state.year}
                    onChangeYear={year => this.setState({ year: year })}
                    onChangeMonth={month => this.setState({ month: month })}
                    selectRange={true}
                />

            </div>
        );
    }
}