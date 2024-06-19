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
import { AvartarList } from "../AvartarList";
import { ProgressBar } from "../ProgressBar";
import { TableToolBar } from "../TableToolBar";

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
    <AvartarList />,
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
    <AvartarList />,
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
    <AvartarList />,
    <ProgressBar value={100} />
  ),
];

export const Tasks = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <TableToolBar
        label="Today's Tasks"
        icon={<AddIcon sx={{ fontSize: 16 }} />}
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
            sx={{
              backgroundColor: "#f7f8fc",
              "& th": {
                fontSize: 12,
              },
            }}
          >
            <TableRow>
              {headerRows.map((item) => (
                <TableCell key={item}>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({ task, due, member, progress }, index) => (
              <TableRow
                key={`task-${index}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
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
