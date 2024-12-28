import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";
import Grid from "@mui/material/Grid";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import TextField from "@mui/material/TextField";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/icons-material/Close';
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
import {
  MaterialReactTable,
  createMRTColumnHelper,
  useMaterialReactTable,
} from "material-react-table";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { mkConfig, generateCsv, download } from "export-to-csv"; //or use your library of choice here
import { data } from "./StudentData2";




const ButtonStyled = styled.button`
  font-size: 0.75em; // Reduce the font size
  padding: 5px 10px; // Reduce the padding
`;


const style = {
  overflow: "auto",
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

const validationSchema = yup.object({
});

const resultPopUp = ({isopen, inhandleClose, row,iseditable} ) => {
  const formik = useFormik({
    validationSchema: validationSchema,
    onSubmit: () => {
      // Add your submit logic here
    },
    validateOnChange: true, // Add this line
  });
  const columnHelper = createMRTColumnHelper();
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    columnHelper.accessor("Srno", {
      header: "Sr.No",
      size: 2,
    }),
    columnHelper.accessor("personal.name", {
      header: "Student Full Name",
      size: 3,
    }),
    columnHelper.accessor("personal.cEmail", {
      header: "Student Official Email",
      size: 1,
    }),
    columnHelper.accessor("personal.gender", {
      header: "Student Gender",
      size: 5,
    }),
    columnHelper.accessor("personal.mmarks", {
      header: "Maximun Marks",
      size: 5,
    }),
    columnHelper.accessor("personal.marks", {
      header: "Obtained Marks",
      size: 5,
    }),
  ];

 

  const csvConfig = mkConfig({
    fieldSeparator: ",",
    decimalSeparator: ".",
    useKeysAsHeaders: true,
  });
  const handleExportRows = (rows) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(data);
    download(csvConfig)(csv);
  };

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    initialState: { density: "compact" },
    defaultDisplayColumn: {
      enableColumnOrdering: true,
      enableColumnResizing: true,
    },
    positionToolbarAlertBanner: "bottom",
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          padding: "8px",
          flexWrap: "wrap",
        }}
      >
        <Button
          //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
          onClick={handleExportData}
          startIcon={<FileDownloadIcon />}
        >
          Export All Data
        </Button>
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          //export all rows, including from the next page, (still respects filtering and sorting)
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          startIcon={<FileDownloadIcon />}
        >
          Export All Rows
        </Button>
        <Button
          disabled={table.getRowModel().rows.length === 0}
          //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
          onClick={() => handleExportRows(table.getRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Page Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          //only export selected rows
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button>
      </Box>
    ),
  });

  return (
    <div style={{ position: 'relative' }}>
          
          <Modal
            open={isopen}
            onClose={inhandleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <IconButton
                style={{ position: "absolute", right: 5, top: 0 }}
                onClick={inhandleClose}
              >
                <CloseIcon onClick={handleClose} />
              </IconButton>
              <Typography
                variant="body1"
                component="div"
                style={{ marginBottom: "1%" }}
              >
                Test Title
              </Typography>
              <Grid container spacing={8}>
                <Grid item xs={12} sm={4}>
                  <Card sx={{ backgroundColor: '#F0F4FB' }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <ButtonStyled>
                        <Typography variant="h6" component="div">
                        Total no. of students allocated                        </Typography>
                      </ButtonStyled>
                      <Card sx={{ bgcolor: 'white', p: 3, mt: 2, textAlign: 'center' }}>
                        <Typography variant="h5" component="div">
                          60
                        </Typography>
                      </Card>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card sx={{ backgroundColor: '#F0F4FB' }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <ButtonStyled>
                        <Typography variant="h6" component="div">
                        Students appeared in the test                      </Typography>
                      </ButtonStyled>
                      <Card sx={{ bgcolor: 'white', p: 3, mt: 2, textAlign: 'center' }}>
                        <Typography variant="h5" component="div">
                          48
                        </Typography>
                      </Card>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card sx={{ backgroundColor: '#F0F4FB' }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <ButtonStyled>
                        <Typography variant="h6" component="div">
                        Students not appeared                        </Typography>
                      </ButtonStyled>
                      <Card sx={{ bgcolor: 'white', p: 3, mt: 2, textAlign: 'center'}}>
                        <Typography variant="h5" component="div">
                          12
                        </Typography>
                      </Card>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Typography
                variant="body1"
                component="div"
                style={{ marginBottom: "1%",marginTop: "2%"}}
              >
                Students Marks of this test
              </Typography>
                  <MaterialReactTable
                    table={table}
                    overflow="auto"
                    style={{ padding: 0 }}
                  />
              
              <Box display="flex" mt={2}>
                <Box display="flex" alignItems="center" algin="left">
                  <WestIcon />
                  <Typography>Previous</Typography>
                </Box>
                <Box display="flex" justifyContent="center" flexGrow={1}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "0 10px" }}
                    onClick={formik.handleSubmit} // Add this line
                  >
                    Edit
                  </Button>
                  <Button variant="contained" onClick= {inhandleClose} style={{ margin: "0 10px" }}>
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ margin: "0 10px" }}
                  >
                    Delete
                  </Button>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <Typography>Next</Typography>
                  <EastIcon />
                </Box>
              </Box>
            </Box>
          </Modal>
        </div>
  );
};

export default resultPopUp;
