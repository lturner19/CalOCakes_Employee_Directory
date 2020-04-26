
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
    const name = event.target.value;
    let value = event.target.value;
    this.setState({
      [name]: value
    })
  }



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
