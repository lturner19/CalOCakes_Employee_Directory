import React from 'react';
import "./style.css";

function TableHead(props) {
    return (
            <thead>
                <tr className="head">
                    <th className="border" scope="col">IMAGE</th>
                    {/* using this setup with () to allow "first" and "last" to used as an arguments  */}
                    {/* putting onClick as the th att. allows user to click the heading and sort the names */}
                    <th className="border" scope="col" onClick={ () =>  props.ascending("first")}> FIRST NAME</th>
                    <th className="border" scope="col" onClick={ () =>  props.ascending("last")}>LAST NAME</th>
                    <th className="border"scope="col">PHONE NUMBER</th>
                    <th className="border"scope="col">EMAIL</th>
                </tr>
            </thead>
    )
}

export default TableHead;
