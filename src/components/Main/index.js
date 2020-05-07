import React from "react";
import Container from "../Container";
import Jumbotron from "../Jumbotron";
import SearchForm from "../SearchForm";
import Table from "../Table";
import API from "../../utils/API"

class Main extends React.Component {
    state = {
        employees: [],
        filtered:[],
        search: ""
    };
    componentDidMount(){
        this.getEmployees();
    }
    getEmployees = () => {
        API.search()
            .then(res => {
                this.setState({ employees: res.data.results })
                console.log(res.data.results)
            })
            .catch(err => console.log(err));
    };


    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1> Employee Management</h1>
                    <SearchForm name="Employees" type="Name" />
                </Jumbotron>
                <Table>
                    {this.state.employees.map((employee, i) => (
                            <tr key={i}>
                                <th scope="row"><img alt="Employee Pic" src={employee.picture.medium}/></th>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.email}</td>
                                <td>{employee.dob.age}</td>
                            </tr>
                    ))}
                </Table>
            </Container>
        )
    }
}

export default Main;