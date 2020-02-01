import React from 'react';
import './App.css';


export default class Employee extends React.Component {
    render() {
        return <li className="eList">
            {this.props.eId} {this.props.name}  -$ {this.props.salary}
        </li>
    }
}