// component to render the Jumbotron heading

import React from 'react';

function PageHeader(props) {
return (
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Cal-O-Cakes Bakeshop</h1>
      <h2>Employee Directory</h2>
      <br/>
      {/* Makes search box*/}
      <input 
      className="search" 
      type="text" 
      placeholder="Search for Employee"
      // allows user to input employee name to search
      onChange={props.searchEmployees}
      />
    </div>
  </div>
)
}

export default PageHeader;