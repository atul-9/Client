import React, { useState } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as XLSX from 'xlsx';
import EditableTable from "../../../references/editabletable";
import axios from 'axios';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; // Reduce the height to fit within the viewport
  padding: 0px; // Reduce// Reduce the padding
`;

// const NavBarStyled = styled(NavBar)`
//   background-color: #f8f9fa;
//   width: 100%;
// `;

const MainFrame = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px; // Reduce the padding
  width: 75%; // Reduce the width
  height: 90%; // Reduce the height
  box-sizing: border-box;
  overflow: auto; // Add a scrollbar if the content is too tall
  margin-left: 25%;
  margin-top: 01%;
  margin-right: 5%;
  display: flex;
  flex-wrap: wrap;
  backgroundcolor: "white";
`;
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: -20px; // Reduce the top margin

  @media (min-width: 768px) {
    flex-direction: row;
  }
  margin-bottom: -2px;
`;

const CardStyled = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding: 7.5px;
  width: 75%;
  margin: 1%;

  &:first-child {
    margin-left: 10%; // Increase the left margin of the first card
  }
  &:nth-child(2) {
    margin-right: 10%; // Increase the right margin of the second card
  }

  @media (max-width: 765px) {
    &:nth-child(2) {
      margin-left: 10%; // Add left margin to the second card when screen width is less than 765px
    }
  }

  @media (min-width: 768px) {
    width: 33.75%;
    margin: 0.9375%;
  }
`;

const InstructionsList = styled.ul`
  font-size: 0.7em; // Reduce the font size
  text-align: left;
`;

const TableContainer = styled.div`
  width: 100%;
  height: 30%; // Make the table fit within the MainFrame
  overflow: auto; // Add a scrollbar if the table is too wide
`;

const ButtonStyled = styled.button`
  font-size: 0.75em; // Reduce the font size
  padding: 5px 10px; // Reduce the padding
`;

const AddMultipleStudent = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const downloadTemplate = async () => {
    try {
      const response = await axios.get('YOUR_API_ENDPOINT', {
        responseType: 'blob', // Important to process the file download
      });
      
      // Create a URL for the blob
      const fileURL = window.URL.createObjectURL(new Blob([response.data]));
      
      // Create a temporary anchor element and trigger the download
      const fileLink = document.createElement('a');
      fileLink.href = fileURL;
      fileLink.setAttribute('download', 'StudentTemplate.xlsx'); // Specify the file name
      document.body.appendChild(fileLink);
      
      fileLink.click();
  
      // Clean up by removing the temporary anchor element
      fileLink.parentNode.removeChild(fileLink);
  
    } catch (error) {
      console.error("There was an error downloading the template:", error);
      // Handle any errors here, such as showing a notification to the user
    }
  };

  const handleImportExcel = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);
      // Assuming EditableTable component can take imported rows as props
      // updateRows(json); This should be a function to pass data to the EditableTable
    };
    reader.readAsBinaryString(file);
  };

  return (
    <PageContainer>
      <Grid
        item
        xs={12}
        style={{
          textAlign: "left",
          marginRight: "45%",
          marginLeft: isSmallScreen ? "25%" : "0",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          style={{ marginTop: "30%" }}
        >
          Add Multiple Students
        </Typography>
      </Grid>

      <MainFrame
        style={{ backgroundColor: "white", marginLeft: "20%", display: "flow" }}
      >
        <h6
          className="left-corner-heading"
          style={{ textAlign: "left", marginTop: "0%" , marginBottom:"3%"}}
        >
          Import from Excel file
        </h6>
        <CardsContainer>
          <CardStyled>
          <ButtonStyled onClick={downloadTemplate}>
              Download Template File
            </ButtonStyled>
            <InstructionsList>
              <li>
                Click "Download Template File" to get an Excel file with
                required headers.
              </li>
              <li>Enter student details in separate rows.</li>
              <li> Fill all required columns.</li>
              <li>Save file on your computer when done.</li>
            </InstructionsList>
          </CardStyled>
          <CardStyled>
          <ButtonStyled onClick={() => document.getElementById('excel-upload').click()}>
              Import data from file
            </ButtonStyled>
            <input type="file" id="excel-upload" style={{ display: 'none' }} onChange={handleImportExcel} accept=".xlsx, .xls"/>
            <InstructionsList>
              <li>Click "Import from Excel file" and select saved file.</li>
              <li>Upload opens, choose saved Excel file.</li>
              <li>
                Click "Open" to import data.The data will be imported in below
                Table. Review imported data.
              </li>
              <li>Click "Submit" to finalize adding students.</li>
            </InstructionsList>
          </CardStyled>
        </CardsContainer>
        <h6
          className="left-corner-heading"
          style={{ textAlign: "left", marginTop: "10px", marginBottom: "10px" }}
        >
          or just manually enter your data here...
        </h6>
        <div style={{ overflowX: "auto" }}>
          <TableContainer>
            <EditableTable /> {/* Use the EditableTable component */}
          </TableContainer>
        </div>
        {/* <ButtonStyled onClick={() => {}}>Add Students</ButtonStyled> */}
      </MainFrame>
    </PageContainer>
  );
};

export default AddMultipleStudent;
