import { Avatar, AvatarGroup } from "@mui/material";
import { employees } from "./constants.ts";

export const EmployeeAvatar = () => {
  return (
    <AvatarGroup
      max={5}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        mr: 2,
      }}
    >
      {employees.map(({ employeeId, employeeName }) => (
        <Avatar
          key={employeeId}
          alt={employeeName}
          src="../../public/pic.png"
          sx={{ width: 24, height: 24, border: "none" }}
        />
      ))}
    </AvatarGroup>
  );
};
