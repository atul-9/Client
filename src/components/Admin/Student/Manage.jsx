import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DetailIcon from "@mui/icons-material/Details";
import Popup from "./studentPopUp";
import {
  MaterialReactTable,
  createMRTColumnHelper,
  useMaterialReactTable,
} from "material-react-table";
import { Box } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { mkConfig, generateCsv, download } from "export-to-csv"; //or use your library of choice here
import { data } from "./StudentData";
import { styled } from "@mui/system";

function ManageStudent() {
  const columnHelper = createMRTColumnHelper();

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const iconhandleEdit = (row) => {
    console.log("Edit clicked for row:", row);
    setSelectedRow(row);
    setIsEditOpen(true);
  };
  const iconhandleDetail = (row) => {
    console.log("Detail clicked for row:", row);
    setSelectedRow(row);
    setIsDetailOpen(true);
  };

  const iconhandleeditClose = () => {
    setIsEditOpen(false);
  };

  const iconhandleDetailClose = () => {
    setIsDetailOpen(false);
  };

  const columns = [
    columnHelper.accessor("Srno", {
      header: "Sr.No",
      size: 2,
    }),
    columnHelper.accessor("personal.name", {
      header: "Student Full Name",
      size: 3,
    }),
    columnHelper.accessor("personal.email", {
      header: "Student Personal Email",
      size: 1,
    }),
    columnHelper.accessor("personal.cEmail", {
      header: "Student Official Email",
      size: 1,
    }),
    columnHelper.accessor("personal.mob", {
      header: "Student Mobile Number",
      size: 5,
    }),
    columnHelper.accessor("personal.gender", {
      header: "Student Gender",
      size: 5,
    }),
    columnHelper.accessor("personal.dob", {
      header: "Student Date of Birth",
      size: 5,
    }),
    columnHelper.accessor("manage", {
      header: "Manage",
      size: 1,
      Cell: ({ cell }) => (
        <div>
          {/* Add your edit, delete, and detail icons here */}
          <IconButton onClick={() => iconhandleEdit(cell.row.original)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => iconhandleDelete(cell.row.original)}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => iconhandleDetail(cell.row.original)}>
            <DetailIcon />
          </IconButton>
        </div>
      ),
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
  const CustomSelect = styled(Select)({
    "& .MuiSelect-select": {
      paddingTop: 4,
      paddingBottom: 4,
      marginBottom: 5,
    },
  });

  const CustomTypography = styled(Typography)({
    marginBottom: "0rem", // Increase this to increase the distance between the field and the label of another column
    marginLeft: "15%",
  });

  console.log("Hello");
  return (
    // <Container style={{ marginTop: "5%", marginLeft: "10%", overflow: "auto" }}>
    <Container
      maxWidth="xl"
      style={{ backgroundColor: "#F0F4FB", marginLeft: "7%", marginTop: "3%" }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          style={{ marginTop: "5%", marginLeft: "12%", padding: "1%" }}
        >
          Manage Students
        </Typography>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper
            elevation={3}
            style={{
              padding: "2%",

              // margin: "auto",
              height: "48%",
              marginTop: "1%",
              marginLeft: "13%",
              marginRight: "7%",
              overflow: "auto",
            }}
          >
            <Typography variant="h6" mt={0}>
              Filter the Students here...
            </Typography>
            <Card sx={{ maxWidth: "100%", mt: 0, top: 0 }}>
              <CardContent sx={{ padding: 2 }}>
                <Grid
                  container
                  spacing={2} // reduce spacing
                  alignItems="center"
                  justifyContent="center"
                >
                  {/* First Row */}
                  <Grid item xs={4} md={4}>
                    <Grid container alignItems="center">
                      <Grid item xs={6}>
                        <CustomTypography variant="body1">
                          U.G Degree:
                        </CustomTypography>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomSelect
                            labelId="ug-degree-select-label"
                            id="ug-degree-select"
                            defaultValue=""
                            size="small"
                          >
                            {/* Populate MenuItems here */}
                            <MenuItem value={10}>Degree 1</MenuItem>
                            <MenuItem value={20}>Degree 2</MenuItem>
                          </CustomSelect>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <Grid container alignItems="center">
                      <Grid item xs={6}>
                        <CustomTypography variant="body1">
                          P.G Degree:
                        </CustomTypography>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomSelect
                            labelId="pg-degree-select-label"
                            id="pg-degree-select"
                            defaultValue=""
                            size="small"
                          >
                            {/* Populate MenuItems here */}
                            <MenuItem value={10}>Degree 1</MenuItem>
                            <MenuItem value={20}>Degree 2</MenuItem>
                          </CustomSelect>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <Grid container alignItems="center">
                      <Grid item xs={6}>
                        <CustomTypography variant=" body1">
                          U.G College:
                        </CustomTypography>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomSelect
                            labelId="ug-college-select-label"
                            id="ug-college-select"
                            defaultValue=""
                            size="small"
                          >
                            {/* Populate MenuItems here */}
                            <MenuItem value={10}>College 1</MenuItem>
                            <MenuItem value={20}>College 2</MenuItem>
                          </CustomSelect>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* Second Row */}
                  <Grid item xs={4} md={4}>
                    <Grid container alignItems="center">
                      <Grid item xs={6}>
                        <CustomTypography variant=" body1">
                          P.G College:
                        </CustomTypography>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomSelect
                            labelId="pg-college-select-label"
                            id="pg-college-select"
                            defaultValue=""
                            size="small"
                          >
                            {/* Populate MenuItems here */}
                            <MenuItem value={10}>College 1</MenuItem>
                            <MenuItem value={20}>College 2</MenuItem>
                          </CustomSelect>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <Grid container alignItems="center">
                      <Grid item xs={6}>
                        <CustomTypography variant=" body1">
                          U.G Year:
                        </CustomTypography>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomSelect
                            labelId="ug-year-select-label"
                            id="ug-year-select"
                            defaultValue=""
                            size="small"
                          >
                            {/* Populate MenuItems here */}
                            <MenuItem value={1}>Year 1</MenuItem>
                            <MenuItem value={2}>Year 2</MenuItem>
                          </CustomSelect>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <Grid container alignItems="center">
                      <Grid item xs={6}>
                        <CustomTypography variant=" body1">
                          P.G Year:
                        </CustomTypography>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomSelect
                            labelId="pg-year-select-label"
                            id="pg-year-select"
                            defaultValue=""
                            size="small"
                          >
                            {/* Populate MenuItems here */}
                            <MenuItem value={1}>Year 1</MenuItem>
                            <MenuItem value={2}>Year 2</MenuItem>
                          </CustomSelect>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* Button Row */}
                  <Grid item xs={4}>
                    <Grid container justifyContent="center">
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        mt="1"
                      >
                        Get the Students
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: "100%", mt: 1, top: 2, marginTop: "2%" }}>
              <CardContent sx={{ padding: 0 }}>
                <MaterialReactTable
                  table={table}
                  overflow="auto"
                  style={{ padding: 0 }}
                />
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
      {isEditOpen && (
        <Popup
          iseditable={true}
          isopen={isEditOpen}
          inhandleClose={iconhandleeditClose}
          row={selectedRow}
        />
      )}
      {isDetailOpen && (
        <Popup
          iseditable={false}
          isopen={isDetailOpen}
          inhandleClose={iconhandleDetailClose}
          row={selectedRow}
        />
      )}
    </Container>
  );
}

export default ManageStudent;
