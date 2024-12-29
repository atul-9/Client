import React, { useState, useEffect } from "react";
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
} from "material-react-table";
import { styled } from "@mui/system";
import axios from "axios";

function ManageStudent() {
	const [students, setStudents] = useState([]);
	const [filters, setFilters] = useState({
		ugDegree: "All",
		pgDegree: "All",
		ugCollege: "All",
		pgCollege: "All",
		ugYear: "All",
		pgYear: "All",
	});
	const [filterOptions, setFilterOptions] = useState({
		ugdegrees: ["All"],
    pgdegrees: ["All"],
		ugcolleges: ["All"],
    pgcolleges: ["All"],
    ugyears: ["All"],
    pgYears: ["All"],
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [tableVisible, setTableVisible] = useState(false);

	useEffect(() => {
		fetchFilterOptions();
	}, []);

	const fetchFilterOptions = async () => {
		try {
			setLoading(true);

      const response =await axios.get("http://localhost:8800/api/admin/studentfilters");
      console.log(response.data);
        setFilterOptions({
          ugdegrees: response.data.ugDegree,
          pgdegrees: response.data.pgDegree,
          ugcolleges: response.data.ugCollege,
          pgcolleges: response.data.pgCollege,
          ugyears: response.data.ugYear,
          pgyears: response.data.pgYear,
        });
			setLoading(false);
		} catch (error) {
			setError(error);
			setLoading(false);
		}
	};

	const handleFilterChange = (event) => {
		const { name, value } = event.target;
		setFilters((prev) => ({ ...prev, [name]: value }));
	};

	const fetchStudentsWithFilters = async () => {
		try {
			setLoading(true);
			setTableVisible(false);
			const queryString = Object.keys(filters)
				.map(
					(key) =>
						`${encodeURIComponent(key)}=${encodeURIComponent(
							filters[key],
						)}`,
				)
				.join("&");
			console.log(queryString);
      const response = await axios.get(`http://localhost:8800/api/admin/students?${queryString}`);
      console.log(response.data);
			const data = response.data;
			setStudents(data);
			setLoading(false);
			setTableVisible(true);
		} catch (error) {
			setError(error);
			setLoading(false);
		}
	};

	const resetState = () => {
		setFilters({
			ugDegree: "",
			pgDegree: "",
			ugCollege: "",
			pgCollege: "",
			ugYear: "",
			pgYear: "",
		});
		setStudents([]);
		setTableVisible(false);
	};

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
					<IconButton
						onClick={() => iconhandleEdit(cell.row.original)}
					>
						<EditIcon />
					</IconButton>
					<IconButton
						onClick={() => iconhandleDelete(cell.row.original)}
					>
						<DeleteIcon />
					</IconButton>
					<IconButton
						onClick={() => iconhandleDetail(cell.row.original)}
					>
						<DetailIcon />
					</IconButton>
				</div>
			),
		}),
	];

	const CustomSelect = styled(Select)({
		"& .MuiSelect-select": {
			paddingTop: 4,
			paddingBottom: 4,
			marginBottom: 5,
		},
	});

	const CustomTypography = styled(Typography)({
		marginBottom: "0rem",
		marginLeft: "15%",
	});

	return (
		// <Container style={{ marginTop: "5%", marginLeft: "10%", overflow: "auto" }}>
		<Container
			maxWidth="xl"
			style={{
				backgroundColor: "#F0F4FB",
				marginLeft: "7%",
				marginTop: "3%",
			}}
		>
			<Grid item xs={12}>
				<Typography
					variant="h6"
					component="h2"
					gutterBottom
					style={{
						marginTop: "4%",
						marginLeft: "12%",
						padding: "1%",
					}}
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
							height: "100%",
							marginTop: "0%",
							marginLeft: "13%",
							marginRight: "7%",
							overflow: "auto",
							maxHeight: "10000px",
						}}
					>
						<Typography variant="body1" mt={-1}>
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
														name="ugDegree"
														value={filters.ugDegree}
														onChange={
															handleFilterChange
														}
														labelId="ug-degree-select-label"
														id="ug-degree-select"
														size="small"
													>
                            

														{filterOptions && filterOptions.ugdegrees && filterOptions.ugdegrees.map((degree, index) => (
    <MenuItem key={index} value={degree}>
        {degree}
    </MenuItem>
))}
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
														name="pgDegree"
														value={filters.pgDegree}
														onChange={
															handleFilterChange
														}
														labelId="pg-degree-select-label"
														id="pg-degree-select"
														size="small"
													>
														{filterOptions && filterOptions.pgdegrees && filterOptions.pgdegrees.map( (degree, index) => (
    <MenuItem key={index} value={degree}>
        {degree}
    </MenuItem>
))}

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
														name="ugCollege"
														value={
															filters.ugCollege
														}
														onChange={
															handleFilterChange
														}
														labelId="ug-college-select-label"
														id="ug-college-select"
														size="small"
													>
														{filterOptions && filterOptions.ugcolleges && filterOptions.ugcolleges.map((college,index) => (
    <MenuItem key={index} value={college}>
        {college}
    </MenuItem>
))}
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
														name="pgCollege"
														value={
															filters.pgCollege
														}
														onChange={
															handleFilterChange
														}
														labelId="pg-college-select-label"
														id="pg-college-select"
														size="small"
													>
														{filterOptions && filterOptions.pgcolleges && filterOptions.pgcolleges.map((college,index) => (
    <MenuItem key={index} value={college}>
        {college}
    </MenuItem>
))}
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
														name="ugYear"
														value={filters.ugYear}
														onChange={
															handleFilterChange
														}
														labelId="ug-year-select-label"
														id="ug-year-select"
														size="small"
													>
														{filterOptions && filterOptions.ugyears && filterOptions.ugyears.map( (year, index) => (
    <MenuItem key={index} value={year}>
        {year}
    </MenuItem>
))}

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
														name="pgYear"
														value={filters.pgYear}
														onChange={
															handleFilterChange
														}
														labelId="pg-year-select-label"
														id="pg-year-select"
														size="small"
													>
														{filterOptions && filterOptions.pgyears && filterOptions.pgyears.map( (year, index) => (
    <MenuItem key={index} value={year}>

        {year}
    </MenuItem>
))}

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
												onClick={
													fetchStudentsWithFilters
												}
											>
												Get the Students
											</Button>
										</Grid>
									</Grid>

									<Grid item xs={4}>
										<Grid container justifyContent="center">
											<Button
												variant="contained"
												color="primary"
												size="small"
												mt="1"
												onClick={resetState}
											>
												Reset Filters
											</Button>
										</Grid>
									</Grid>
								</Grid>
							</CardContent>
						</Card>

						<Card
							sx={{
								maxWidth: "100%",
								mt: 1,
								top: 2,
								marginTop: "2%",
							}}
						>
							<CardContent sx={{ padding: 0 }}>
								{loading && <div>Loading...</div>}
								{error && <div>Error: {error.message}</div>}

								{tableVisible && (
									<MaterialReactTable
										columns={columns}
										data={students}
										overflow="auto"
										style={{ padding: 0 }}
										/* Other props */
									/>
								)}
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
