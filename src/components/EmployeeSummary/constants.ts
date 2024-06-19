import PeopleIcon from "@mui/icons-material/People";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";
import WorkIcon from "@mui/icons-material/Work";

type EmployeeSummaryItems = {
  label: string;
  amount: number;
  diff: number;
  icon: keyof typeof icons;
};

export const icons = {
  PeopleIcon,
  PersonAddAlt1Icon,
  PersonRemoveAlt1Icon,
  WorkIcon,
};

export const employeeSummaryData: EmployeeSummaryItems[] = [
  { label: "Total employee", amount: 234, diff: 5, icon: "PeopleIcon" },
  { label: "New employee", amount: 42, diff: 5, icon: "PersonAddAlt1Icon" },
  {
    label: "Resigned employee",
    amount: 12,
    diff: 2,
    icon: "PersonRemoveAlt1Icon",
  },
  { label: "Job applicants", amount: 367, diff: 10, icon: "WorkIcon" },
];
