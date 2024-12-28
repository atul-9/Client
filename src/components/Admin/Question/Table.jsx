import {
    MaterialReactTable,
    createMRTColumnHelper,
    useMaterialReactTable,
  } from 'material-react-table'; 
import { Box, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { data } from './QuestData';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DetailIcon from '@mui/icons-material/Details';
import EditQuesPopup from './EditQuesPopup';
import { useState } from 'react';

  const Example = () => {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    

    const iconhandleEdit = (row) => {
      console.log('Edit clicked for row:', row);
      setSelectedRow(row);
      setIsEditOpen(true);
    };
    const iconhandleDetail = (row) => {
      console.log('Detail clicked for row:', row);
      setSelectedRow(row);
      setIsDetailOpen(true);
    };
    
    const iconhandleeditClose = () => {
      setIsEditOpen(false);
    };

    const iconhandleDetailClose = () => {
      setIsDetailOpen(false);
    };
    const columnHelper = createMRTColumnHelper();
  
  const columns = [
    columnHelper.accessor('id', {
      header: 'ID',
      size: 30, // Reduced width
    }),
    columnHelper.accessor('section', {
      header: 'Section',
      size: 80, // Reduced width
    }),
    columnHelper.accessor('topic', {
      header: 'Topic',
      size: 80, // Reduced width
    }),
    columnHelper.accessor('type', {
      header: 'Type',
      size: 100, // Reduced width
    }),
    columnHelper.accessor('difficultylevel', {
      header: 'Difficulty Level',
      size: 90, // Reduced width
    }),
    columnHelper.accessor('questions', {
      header: 'Questions',
      size: 150, // Reduced width
    }),
    ...['optiona', 'optionb', 'optionc', 'optiond'].map((option) =>
      columnHelper.accessor(option, {
        header: `${option.toUpperCase()} `,
        size: 120, // Reduced width
        Cell: ({ cell }) => (
          <div>
            {cell.row.original.type === 'Single Correct' ? (
              <label>
                <input type="radio" name={`${cell.row.original.id}`} />
                {` ${cell.row.original[option]}`}
              </label>
            ) : (
              <label>
                <input
                  type="checkbox"
                  name={`${option}_${cell.row.original.id}`}
                />
                {` ${cell.row.original[option]}`}
              </label>
            )}
          </div>
        ),
      })
    ),
    columnHelper.accessor('manage', {
        header: 'Manage',
        size: 120,
        Cell: ({ cell }) => (
          <div>
            {/* Add your edit, delete, and detail icons here */}
            <IconButton onClick={() => iconhandleEdit(cell.row.original)}>
              <EditIcon  />
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
  

    const handleExportRows = (rows) => {
      const doc = new jsPDF();
      const tableData = rows.map((row) => Object.values(row.original));
      const tableHeaders = columns.map((c) => c.header);
  
      autoTable(doc, {
        head: [tableHeaders],
        body: tableData,
      });
  
      doc.save('mrt-pdf-example.pdf');
    };
  
    const table = useMaterialReactTable({
      columns,
      layoutMode: 'grid-no-grow',
      data,
      enableRowSelection: true,
      columnFilterDisplayMode: 'popover',
      paginationDisplayMode: 'pages',
      positionToolbarAlertBanner: 'bottom',
      initialState: { density: "compact" },
      renderTopToolbarCustomActions: ({ table }) => (
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            padding: '8px',
            marginTop: 0,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
       
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
    <div>
      <MaterialReactTable table={table} />
      {isEditOpen && <EditQuesPopup  iseditable={true} isopen={isEditOpen} inhandleClose={iconhandleeditClose} row={selectedRow} />}
      {isDetailOpen && <EditQuesPopup iseditable={false} isopen={isDetailOpen} inhandleClose={iconhandleDetailClose} row={selectedRow} /> }
      
    </div>
  );
};

export default Example;