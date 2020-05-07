import React from "react";


function Table (props) {
    return (
        <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">First <i dataid="first" dataorder="desc" className="fas fa-angle-down" onClick={props.handleClick}></i> <i dataid="first" dataorder="asc"className="fas fa-angle-up" onClick={props.handleClick}></i> </th>
      <th scope="col">Last  <i dataid="last" dataorder="desc" className="fas fa-angle-down" onClick={props.handleClick}></i> <i dataid="last" dataorder="asc" className="fas fa-angle-up" onClick={props.handleClick}></i> </th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    {props.children}
  </tbody>
</table>
    )
}

export default Table;