import React, { useState } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
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
import EditableTable from "../../../references/editabletable";

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
  height: 80%; // Reduce the height
  box-sizing: border-box;
  overflow: auto; // Add a scrollbar if the content is too tall
  margin-left: 25%;
  margin-top: 0%;
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

const AllocateTest = () => {
  const [collapse, setCollapse] = useState(false);
  const handleToggleCollapse = () => setCollapse(!collapse);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageContainer>
      <Grid
        item
        xs={12}
        style={{
          textAlign: "left",
          marginRight: "50%",
          marginLeft: isSmallScreen ? "25%" : "0",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          style={{ marginTop: "37%" }}
        >
          Allocate Test
        </Typography>
      </Grid>

      <MainFrame
        style={{ backgroundColor: "white", marginLeft: "20%", display: "flow" }}
      >
        <h6
          className="left-corner-heading"
          style={{ textAlign: "left", marginTop: "0%" }}
        >
          Test Selection
        </h6>
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
        <h6
          className="left-corner-heading"
          style={{ textAlign: "left", marginTop: "10px", marginBottom: "10px" }}
        >
          or just manually enter your data here...
        </h6>
        <div style={{ overflowX: "auto" }}>
          <TableContainer>
            <SpreadsheetComp /> {/* Use the EditableTable component */}
          </TableContainer>
        </div>
        <Grid container justifyContent="center" sx={{ mt: 2 }}>
            <Button variant="contained" type="submit" size="small">
              Allocate Test{" "}
            </Button>
          </Grid>
      </MainFrame>

    </PageContainer>
  );
};

export default AllocateTest;
