import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgba(35,137,218,1)",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(id, serviceName, price) {
  return { id, serviceName, price };
}

const rows = [
  createData(1, "Xizmat 1", 10000),
  createData(2, "Xizmat 2", 15000),
  createData(3, "Xizmat 3", 20000),
  createData(4, "Xizmat 4", 25000),
  createData(5, "Xizmat 5", 30000),
];

export default function ServiceTable() {
  const handleEdit = id => {
    // Handle edit action
    console.log(`Edit service with id: ${id}`);
  };

  const handleDelete = id => {
    // Handle delete action
    console.log(`Delete service with id: ${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>T/R</StyledTableCell>
            <StyledTableCell>Xizmat nomi</StyledTableCell>
            <StyledTableCell align="right">
              Xizmat narxi&nbsp;(so'm)
            </StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell>{row.serviceName}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="center">
                <IconButton
                  color="primary"
                  aria-label="edit"
                  onClick={() => handleEdit(row.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  aria-label="delete"
                  onClick={() => handleDelete(row.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
