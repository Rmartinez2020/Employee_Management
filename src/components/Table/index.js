import React from "react";


function Table (props) {
    return (
        <table class="table-dark">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
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