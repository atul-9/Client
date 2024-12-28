import React from "react";
import { MaterialReactTable } from "material-react-table";
import { useState } from "react";
import { Button } from "@mui/material";
import { faker } from "@faker-js/faker";

const data = [...Array(100)].map(() => ({
  address: faker.location.streetAddress(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  address: faker.location.streetAddress(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  address: faker.location.streetAddress(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName()
  

}));
function EditableTable_two() {
  const [tableData, setTableData] = useState(data);
  const handleSaveCell = (cell, value) => {
    //@ts-ignore
    tableData[cell.row.index][cell.column.id] = value;
    setTableData([...tableData]);
  };

  return (
    <MaterialReactTable
      columns={[
        {
          accessorKey: "firstName",
          header: " Section",
        },
        {
          accessorKey: "lastName",
          header: "Topic",
        },
        {
          accessorKey: "address",
          header: "Type",
        },
        {
          accessorKey: "state",
          header:"Difficulty Level",
        },
        {
          accessorKey: "phoneNumber",
          header: "Question",
        },
        {
            accessorKey: "phoneNumber",
            header: "Option A",
          },
          {
            accessorKey: "phoneNumber",
            header: "Option B",
          },
          {
            accessorKey: "phoneNumber",
            header: "Option C",
          },
          {
            accessorKey: "phoneNumber",
            header: "Option D",
          }
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
      onCreatingRowSave={() => {}}
      renderTopToolbarCustomActions={({ table }) => (
        <Button onClick={() => table.setCreatingRow(true)}>Add</Button>
      )}
    />
  );
}

export default EditableTable_two;
