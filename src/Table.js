import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  console.log("Table Body Props:", props.characterData);
  return (
    <tr>
      <td>Blah</td>
      <td>Bouncer</td>
    </tr>
  );
};

class Table extends Component {
  render() {
    // const characterData = this.props;
    console.log("Table props:", this.props);
    return (
      <table>
        <TableHeader />
        <TableBody characterData={this.props} />
      </table>
    );
  }
}

export default Table;
