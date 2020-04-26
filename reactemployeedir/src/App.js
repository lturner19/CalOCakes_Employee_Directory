import React from "react";
import Header from "./components/Header"
import TableHeadings from "./components/TableHead";
import EmployeeRows from "./components/TableRows";
import Employees from "./employees.json";

class App extends React.Component {
  state = {
    Employees,
    search: ""
  };

searchEmployees = event =>{
  const name = event.target.name;
  let value = event.target.value;
  this.setState({
    [name]: value
  });
};



  render() {
    return (
      <div>
      <Header/>
      <table className="table table-striped">
          <TableHeadings />
          <EmployeeRows />
      </table>
      </div>
    )
  }
}

export default App;
