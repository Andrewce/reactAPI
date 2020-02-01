import React from 'react';
import request from 'request'
import Employee from './Employee'


export class Group extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [],
            totalSalary: 0
        };

    }

    componentDidMount() {
        let url = 'http://dummy.restapiexample.com/api/v1/employees'

        request({
            method: 'GET',
            url: url,
        },
            (err, res, body) => {
                if (err) return console.error(err);
                const info = JSON.parse(body);
                let items = [];
                let Sum = 0;
                info.data.forEach(function (i, e) {
                    items.push(i)
                    Sum += parseInt(i.employee_salary)
                })
                this.setState({ items: items, totalSalary: Sum });
            });

    }

    render() {

        return (
            < div className="App" >
                <div>{this.state.totalSalary}</div>
                <ul>
                    {this.state.items.map((item, i) => {
                        return <Employee name={item.employee_name} key={i} eId={item.id} salary={item.employee_salary} />

                    })}
                </ul>
            </div >

        );
    }
};