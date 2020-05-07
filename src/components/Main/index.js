import React from "react";
import Container from "../Container";
import Jumbotron from "../Jumbotron";
import SearchForm from "../SearchForm";
import Table from "../Table";
import API from "../../utils/API"

class Main extends React.Component {
    state = {
        employees: [],
        filtered: [],
        search: ""
    };
    componentDidMount() {
        this.getEmployees();
    }
    getEmployees = () => {
        API.search()
            .then(res => {
                this.setState({ employees: res.data.results })
                // console.log(res.data.results)
            })
            .catch(err => console.log(err));
    };
    handleInputChange = async (e) => {
        const value = e.target.value;
        await this.setState({ search: value });
        let filteredEmployees = this.state.employees.filter(employee => employee.name.first.toLowerCase().includes(this.state.search.toLowerCase()));
        this.setState({ filtered: filteredEmployees })
    }
    compareValues = (key, order = 'asc') => {
        return function innerSort(a, b) {
            if (!a.name.hasOwnProperty(key) || !b.name.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }

            const varA = (typeof a[key] === 'string')
                ? a.name[key].toUpperCase() : a.name[key];
            const varB = (typeof b[key] === 'string')
                ? b.name[key].toUpperCase() : b.name[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    }
    handleClick = async (e) => {
        const order = e.target.getAttribute("dataorder")
        const value = e.target.getAttribute("dataid")
        let sortedEmployees = this.state.employees.sort(this.compareValues(value, order))
        await this.setState({employees: sortedEmployees});
        console.log(this.state.employees)

    }

    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1> Employee Management</h1>
                    <SearchForm name="Employees" type="Name" handleInputChange={this.handleInputChange} />
                </Jumbotron>
                <Table handleClick={this.handleClick}>
                    {this.state.search === "" ? this.state.employees.map((employee, i) => (
                        <tr key={i}>
                            <th scope="row"><img alt="Employee Pic" src={employee.picture.medium} /></th>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.email}</td>
                            <td>{employee.dob.age}</td>
                        </tr>
                    ))
                        :
                        this.state.filtered.map((employee, i) => (
                            <tr key={i}>
                                <th scope="row"><img alt="Employee Pic" src={employee.picture.medium} /></th>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.email}</td>
                                <td>{employee.dob.age}</td>
                            </tr>
                        ))
                    }
                </Table>
            </Container>
        )
    }
}

export default Main;