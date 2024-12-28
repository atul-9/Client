import React from "react";
import { MaterialReactTable } from "material-react-table";
import { useState } from "react";
import { Button } from "@mui/material";
import { faker } from "@faker-js/faker";

const data = [...Array(100)].map(() => ({
  address: faker.location.streetAddress(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  state: faker.location.state(),
}));
function EditableTable() {
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
          header: "First Name",
        },
        {
          accessorKey: "lastName",
          header: "Last Name",
        },
        {
          accessorKey: "address",
          header: "Address",
        },
        {
          accessorKey: "state",
          header: "State",
        },
        {
          accessorKey: "phoneNumber",
          enableEditing: false,
          header: "Phone Number",
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
      onCreatingRowSave={() => {}}
      renderTopToolbarCustomActions={({ table }) => (
        <Button onClick={() => table.setCreatingRow(true)}>Add</Button>
      )}
    />
  );
}

export default EditableTable;
