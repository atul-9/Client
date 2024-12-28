import Spreadsheet from "react-spreadsheet";

const SpreadsheetComp = () => {
  const columnLabels = ["Sr.No", "Student FullName","Student Personal Email","Student Official Email","Student Mobile Number","Student Gender","Student DOB"];
  const rowLabels = ["1", "2", "3", "4", "5", "6"];
  const data = [
    [{ value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }],
  ];
  return (
    <Spreadsheet
      data={data}
      columnLabels={columnLabels}
      rowLabels={rowLabels}
    />
  );
};

export default SpreadsheetComp;
