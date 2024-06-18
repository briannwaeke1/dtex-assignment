import { Avatar, AvatarGroup } from "@mui/material";
import { employees } from "./constants.ts";

export const AvatarRow = () => {
  return (
    <AvatarGroup
      max={5}
      sx={{
        display: "flex",
        justifyContent: "start",
        height: "100%",
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
