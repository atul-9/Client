import React from "react";
import { MaterialReactTable } from "material-react-table";
import { useState } from "react";
import { Button } from "@mui/material";

function EditableTable() {
  const [tableData, setTableData] = useState([]);

  // Correctly handle cell edits to update the state
  const handleSaveCell = (cell, value) => {
    // Create a new array with updates instead of mutating the state directly
    const newData = tableData.map((row, index) => {
      if (index === cell.row.index) {
        return { ...row, [cell.column.id]: value }; // Update the cell's value
      }
      return row;
    });
    setTableData(newData); // Set the new data as the current state
  };

  // Function to handle saving new rows
  const handleCreatingRowSave = (newRow) => {
    setTableData(currentData => [...currentData, newRow.values]);
  };

  return (
    <MaterialReactTable
      columns={[
        {
          accessorKey: "firstName",
          header: "Student Full Name",
        },
        {
          accessorKey: "lastName",
          header: "Student Personal Email",
        },
        {
          accessorKey: "address",
          header: "Student College Email",
        },
        {
          accessorKey: "state",
          header:"Student Gender",
        },
        {
          accessorKey: "phoneNumber",
          enableEditing: true, // Assuming DOB is displayed but not editable

          header: "Student DOB",
        },
        
      ]}
      createDisplayMode="row"
      data={tableData}
      editDisplayMode="cell"
      enableEditing
      initialState={{ density: "compact" }}
      muiEditTextFieldProps={({ cell }) => ({
        onBlur: (event) => {
          handleSaveCell(cell, event.target.value);
        },
      })}
      onCreatingRowSave={handleCreatingRowSave} // Use the handleCreatingRowSave function
      renderTopToolbarCustomActions={({ table }) => (
        <Button onClick={() => table.setCreatingRow(true)}>Add Student</Button>
      )}
    />
  );
}

export default EditableTable;
