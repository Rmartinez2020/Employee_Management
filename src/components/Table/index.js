import React from "react";


function Table (props) {
    return (
        <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">First <i className="fas fa-angle-down" onClick={props.onClick}></i> <i className="fas fa-angle-up" onClick={props.onClick}></i> </th>
      <th scope="col">Last  <i className="fas fa-angle-down" onClick={props.onClick}></i> <i className="fas fa-angle-up" onClick={props.onClick}></i> </th>
      <th scope="col">Email</th>
      <th scope="col">Age  <i className="fas fa-angle-down" onClick={props.onClick}></i> <i className="fas fa-angle-up" onClick={props.onClick}></i></th>
    </tr>
  </thead>
  <tbody>
    {props.children}
  </tbody>
</table>
    )
}

export default Table;