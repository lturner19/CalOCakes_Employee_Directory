
import React from "react";
import Header from "./components/Header/Header";
import TableHeadings from "./components/TableHead/TableHead";
import EmployeeRows from "./components/TableRows/TableRows";
import Footer from "./components/Footer/Footer";
import Employees from "./employees.json";

class App extends React.Component {
  state = {
    Employees: Employees.results,
    originalList: Employees.results,
    search: "",
  };

  //needed to search employees
  searchEmployees = event => {
    //destructuring the name and value from event.target
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
// console.log(value) used to ensure the value = each letter user type in 
      //filter compares the api list against the user input (first or last name), but never changes the original list (api list)
    let newEmployee = this.state.originalList.filter(employee => {
       //indexOf = sorting strings
      //changing the api name.first to lowercase and the user input (value) to lowercase
      //when filtering only show letters with values greater than -1 
      //ex. Phil (user types in p = > -1= displayed, k = < -1 not displayed)
      return employee.name.first.toLowerCase().indexOf(value.toLowerCase()) > -1 || employee.name.last.toLowerCase().indexOf(value.toLowerCase());
    })
      //changing the employee state, to the newEmployee state
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
