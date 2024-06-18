import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { EmployeeAvatar } from "../EmployeeAvatar/EmployeeAvatar.tsx";
import { ProgressBar } from "../ProgressBar";
import styles from "./Tasks.module.scss";
import { tasks } from "./constants.ts";

const columns: GridColDef<(typeof tasks)[number]>[] = [
  {
    field: "task",
    headerName: "TASK",
    width: 150,
  },
  {
    field: "due",
    headerName: "DUE",
    width: 150,
  },
  {
    field: "member",
    headerName: "MEMBER",
    width: 150,
    renderCell: () => {
      return <EmployeeAvatar />;
    },
  },
  {
    field: "progress",
    headerName: "PROGRESS",
    width: 150,
    renderCell: (params) => {
      return <ProgressBar value={Number(params.value)} />;
    },
  },
];

export const Tasks = () => {
  return (
    <Box sx={{ height: "fit-content", width: "fit-content" }}>
      <DataGrid
        rows={tasks}
        columns={columns}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        hideFooter
        classes={{
          columnHeaders: styles.tasks__columnHeaders,
          columnHeader: styles.tasks__columnHeader,

          columnHeaderTitle: styles.tasks__columnHeaderTitle,
          columnHeaderTitleContainer: styles.tasks__columnHeaders,
        }}
      />
    </Box>
  );
};
