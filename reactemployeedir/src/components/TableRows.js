import React from 'react';

function TableRows(props) {
    return (
        <tbody>
            <tr>
                <td><img src={props.image} alt={props.name}/></td>
                <td>{props.firstName} {props.lastName}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.dob}</td>
            </tr>
        </tbody>
    );
}

export default TableRows;