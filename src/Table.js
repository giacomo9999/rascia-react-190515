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

const TableBody = dataIn => {
  console.log("Table Body Props:", dataIn);
  const rows = dataIn.characterData.map((entry, index) => {
    return (
      <tr key={index}>
        <td>{entry.name}</td>
        <td>{entry.job}</td>
        <td>
          <button onClick={() => dataIn.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}

export default Table;
