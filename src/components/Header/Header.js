// component to render the Jumbotron heading
import React from 'react';
import './Header.css';

function Header(props) {
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
      //name ties to the search in state (app.js)
      name="search"
      value={props.search}
      placeholder="Search for Employee"
      // allows user to input employee name to search
      //when using the event (in app.js) there is not need to use the setup like in TableHead.js
      onChange={props.searchEmployees}
      />
    </div>
  </div>
)
}

export default Header;