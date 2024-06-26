import { Avatar, AvatarGroup } from "@mui/material";
import { employees } from "./constants.ts";

export const AvartarList = () => {
  return (
    <AvatarGroup
      max={4}
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
          src="/pic.png"
          sx={{ width: 24, height: 24, border: "none" }}
        />
      ))}
    </AvatarGroup>
  );
};
