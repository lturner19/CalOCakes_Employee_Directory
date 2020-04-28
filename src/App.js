
import React, {Component} from "react";
import Header from "./components/Header";
import TableHeadings from "./components/TableHead";
import EmployeeRows from "./components/TableRows";
import Footer from "./components/Footer";
import Employees from "./employees.json";

class App extends Component {
  state = {
    Employees: Employees.results,
    originalList: Employees.results,
    search: "",
    sortType:"ascending"
  };

  // ``````````Begin searchEmployees function```````````````````````

  //needed to search employees
  searchEmployees = event => {
    // destructuring the name and value from event.target
    const {name, value } = event.target
    this.setState({
      [name]: value
    })
    // console.log(value) used to ensure the value = each letter user type in 
      //filter compares the api list against the user input (first or last name), but never changes the original list (api list)
    let newEmployee = this.state.originalList.filter(employee=>{
       //indexOf = sorting strings
      //changing the api name.first to lowercase and the user input (value) to lowercase
      //when filtering only show letters with values greater than -1 
      //ex. Phil (user types in p = > -1= displayed, k = < -1 not displayed)
      return employee.name.first.toLowerCase().indexOf(value.toLowerCase()) > -1 || employee.name.last.toLowerCase().indexOf(value.toLowerCase()) > -1 
    })
    //changing the employee state, to the newEmployee state
    this.setState({
      Employees: newEmployee
    })
};

  // ``````````End searchEmployees function```````````````````````


  ascending = (columnName) => {
    console.log(this.state.employees);

    let newEmployees;
    if (this.state.sortType === "ascending") {
      newEmployees = this.state.Employees.sort((a, b) => a.name[columnName].localeCompare(b.name[columnName]));
      this.setState({
        Employees: newEmployees,
        sortType: "descending"
      })
    } else {
      newEmployees = this.state.Employees.sort((a, b) => b.name[columnName].localeCompare(a.name[columnName]));
      this.setState({
        Employees: newEmployees,
        sortType: "ascending"
      })
    }
  }


  render() {
    return (
      <div>
        <Header
          search={this.state.search}
          searchEmployees={this.searchEmployees}
        />
        <table className="table table-striped">
          {/* using the ascending from state */}
          <TableHeadings
          ascending={this.ascending}
          />
          <EmployeeRows 
          employees={this.state.Employees}
          />
        </table>
        <Footer />
      </div>
    )
  }
}
export default App;
