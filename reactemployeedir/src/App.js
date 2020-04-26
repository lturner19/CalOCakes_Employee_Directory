
import React from "react";
import Header from "./components/Header/Header";
import TableHeadings from "./components/TableHead/TableHead";
import EmployeeRows from "./components/TableRows/TableRows";
import Footer from "./components/Footer/Footer";
import Employees from "./employees.json";

class App extends React.Component {
  state = {
    Employees,
    search: "",
  };

  //needed to search employees
  searchEmployees = event => {
    //destructuring the name and value from event.target
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })

    let newEmployee = this.state.originalList.filter(employee => {
      return employee.name.first.toLowerCase().indexOf(value.toLowerCase()) > -1 || employee.name.last.toLowerCase().indexOf(value.toLowerCase());
    })
    
    this.setState({
      employee: newEmployee
    })
  };



  render() {
    return (
      <div>
        <Header />
        <table className="table table-striped">
          {/* using the ascending from state */}
          <TableHeadings />
          <EmployeeRows />
        </table>
        <Footer />
      </div>
    )
  }
}
export default App;
