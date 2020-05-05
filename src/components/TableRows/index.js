import React from 'react';
import "./style.css";

function TableRows(props) {
    return (
        <tbody>
        {/* keep this set up = employees, then employee */}
        {/* employee is singular because it is pointing to each individual*/}
        {/* could setup (employee, index) index is standard to map callback (like (i) is used in for loops) */}
            {props.employees.map((employee) => {//index can be used here when there is not an id # available
                return(
                //the names after employee, must match the keys from employee.json
                //could setup employee.index
                //keys must always be unique identifiers and in the top level (not in <td>)
                <tr className="rows" key={employee.dob.date}> 
                    <td><img src={employee.picture.thumbnail} alt={employee.name.first} /></td>
                    <td>{employee.name.first}</td>
                    <td>{employee.name.last}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.email}</td>
                </tr>
            ) }
            )}


        </tbody>
    );
}

export default TableRows;
// map = transitional; transitioning from the api object format, to the tr format