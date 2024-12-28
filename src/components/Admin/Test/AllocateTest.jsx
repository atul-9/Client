import React, { useState } from "react";
import styled from "styled-components";
import SpreadsheetComp from "../../SpreadsheetComp";
import PaginationRounded from "../../../Global/Pagination";
import NavBar from "../../../Global/Navbar"; // Import your NavBar component
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useFormik } from "formik";
import * as yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import TextField from "@mui/material/TextField";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh; // Reduce the height to fit within the viewport
  padding: 0px; // Reduce// Reduce the padding
`;

const NavBarStyled = styled(NavBar)`
  background-color: #f8f9fa;
  width: 100%;
`;

const MainFrame = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px; // Reduce the padding
  width: 90%; // Reduce the width
  height: 90%; // Reduce the height
  box-sizing: border-box;
  overflow: auto; // Add a scrollbar if the content is too tall
  margin-left: 18%;
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

  background-color: #F0F4FB; // Change the background color

  &:first-child {
    margin-left: 10%; // Increase the left margin of the first card
  }
  &:nth-child(2) {
    margin-right: 10%; // Increase the right margin of the second card
  }

  @media (min-width: 768px) {
    width: 33.75%;
    margin: 0.9375%;
  }
`;

const InstructionsList = styled.ul`
  font-size: 1em; // Reduce the font size
  text-align: left;
`;

const TableContainer = styled.div`
  width: 100%;
  height: 30%; // Make the table fit within the MainFrame
  overflow: auto; // Add a scrollbar if the table is too wide
`;

const SpreadsheetCompStyled = styled(SpreadsheetComp)`
  font-size: 0.1em; // Reduce the font size even further
  width: 100%;
  button {
    padding: 3.75px 7.5px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 0.0375em; // Reduce the size of the headings
  }
  .spreadsheet-cell {
    // Assuming the cells have a class name of 'spreadsheet-cell'
    width: 50px !important; // Reduce the width of the cells
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  height: "95%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 1, // Padding top set to 0
  pb: 0, // Padding bottom set to 0
  pl: 3, // Padding left set to 4
  pr: 3, // Padding right set to 4
};

const ButtonStyled = styled.button`
  font-size: 1em; // Reduce the font size
  padding: 5px 10px; // Reduce the padding
`;


// Initialize formik

const AllocateTest = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [collapse, setCollapse] = useState(false);
  const handleToggleCollapse = () => setCollapse(!collapse);

  return (
    <PageContainer>
      <NavBarStyled />
      <MainFrame>
        <h4
          className="left-corner-heading"
          style={{ textAlign: "left", marginTop: "0px" }}
        >
          Allocate Test
        </h4>
        <CardsContainer>
          <CardStyled>
            <ButtonStyled onClick={() => {}}>
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
            <ButtonStyled onClick={() => {}}>
              Import data from file
            </ButtonStyled>
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
        <h4
          className="left-corner-heading"
          style={{ textAlign: "left", marginTop: "10px", marginBottom: "10px" }}
        >
          or add students manually in the list...
        </h4>
        <div style={{ overflowX: "auto" }}>
          {" "}
          {/* Add this to prevent the table from going out of the page */}
          <TableContainer>{<SpreadsheetCompStyled />}</TableContainer>
        </div>
        <ButtonStyled onClick={() => {}}>Allocate Test</ButtonStyled>
        <PaginationRounded />
      </MainFrame>
    </PageContainer>
  );
};

export default AllocateTest;
