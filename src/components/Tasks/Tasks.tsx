import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ReactNode } from "react";
import { AvatarRow } from "../AvatarRow";
import { ProgressBar } from "../ProgressBar";
import { TableHeader } from "../TableHeader";

function createData(
  task: ReactNode,
  due: string,
  member: ReactNode,
  progress: ReactNode
) {
  return { task, due, member, progress };
}

const headerRows = ["TASK", "DUE", "MEMBER", "PROGRESS"];

const rows = [
  createData(
    <FormControlLabel
      control={
        <Checkbox
          value={String("Task 1")}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 20,
              opacity: 0.4,
            },
            "&.Mui-checked": {
              color: "red",
            },
          }}
        />
      }
      label={"Task 1"}
    />,
    "Jun 30, 2024",
    <AvatarRow />,
    <ProgressBar value={25} />
  ),
  createData(
    <FormControlLabel
      control={
        <Checkbox
          value={String("Task 2")}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 20,
              opacity: 0.4,
            },
            "&.Mui-checked": {
              color: "red",
            },
          }}
        />
      }
      label={"Task 2"}
    />,
    "Jun 30, 2024",
    <AvatarRow />,
    <ProgressBar value={50} />
  ),
  createData(
    <FormControlLabel
      control={
        <Checkbox
          value={String("Task 3")}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 20,
              opacity: 0.4,
            },
            "&.Mui-checked": {
              color: "red",
            },
          }}
        />
      }
      label={"Task 3"}
    />,
    "Jun 30, 2024",
    <AvatarRow />,
    <ProgressBar value={100} />
  ),
];

export const Tasks = () => {
  return (
    <Box sx={{ width: 650 }}>
      <TableHeader
        label="Tasks"
        icon={<AddIcon />}
      />
      <TableContainer
        component={Paper}
        sx={{ borderRadius: "0", boxShadow: "none", maxWidth: 650 }}
      >
        <Table
          aria-label="tasks table"
          sx={{ maxWidth: 650, border: "1px solid #e0e0e0" }}
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
            {rows.map(({ task, due, member, progress }, index) => (
              <TableRow key={`task-${index}`}>
                <TableCell
                  component="th"
                  scope="row"
                >
                  {task}
                </TableCell>
                <TableCell>{due}</TableCell>
                <TableCell>{member}</TableCell>
                <TableCell>{progress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
