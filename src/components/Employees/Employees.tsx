import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";
import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";
import { TableToolBar } from "../TableToolBar";

function createData(
  employeeName: ReactNode,
  employeeId: string,
  email: string,
  role: string,
  status: ReactNode
) {
  return { employeeName, employeeId, email, role, status };
}

const headerRows = [
  "EMPLOYEE NAME",
  "EMPLOYMENT ID",
  "EMAIL",
  "ROLE",
  "STATUS",
];

const rows = [
  createData(
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Avatar
        key={1}
        alt="Employee Avatar"
        src="../../public/pic.png"
        sx={{ width: 24, height: 24, border: "none" }}
      />

      <Typography>Darrel Steward</Typography>
    </Box>,
    "#E3041",
    "janedoe@mail.com",
    "Sr Software Engineer",
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <OutboundOutlinedIcon sx={{ fontSize: 16 }} />
      <Typography sx={{ fontSize: 14 }}>Active</Typography>
    </Box>
  ),
  createData(
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Avatar
        key={1}
        alt="Employee Avatar"
        src="../../public/pic.png"
        sx={{ width: 24, height: 24, border: "none" }}
      />

      <Typography>John Doe</Typography>
    </Box>,
    "#E3042",
    "jondoe@mail.com",
    "Sr Software Engineer",
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <OutboundOutlinedIcon sx={{ fontSize: 16 }} />
      <Typography sx={{ fontSize: 14 }}>Active</Typography>
    </Box>
  ),
];

export const Employees = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <TableToolBar
        label="Employees"
        icon={<MoreHorizIcon sx={{ fontSize: 16 }} />}
      />
      <TableContainer
        component={Paper}
        sx={{ borderRadius: "0", boxShadow: "none" }}
      >
        <Table
          aria-label="tasks table"
          sx={{ border: "1px solid #e0e0e0" }}
        >
          <TableHead
            sx={{ backgroundColor: "#f7f8fc", borderRadius: "0", height: 20 }}
          >
            <TableRow>
              {headerRows.map((header) => (
                <TableCell
                  key={header}
                  sx={{ fontSize: 12 }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({ employeeName, employeeId, email, role, status }) => (
              <TableRow key={employeeId}>
                <TableCell
                  component="th"
                  scope="row"
                >
                  {employeeName}
                </TableCell>
                <TableCell>{employeeId}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{role}</TableCell>
                <TableCell>{status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
