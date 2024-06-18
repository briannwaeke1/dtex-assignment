import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ReceiptIcon from "@mui/icons-material/Receipt";
import TaskIcon from "@mui/icons-material/Task";

type PayrollItems = {
  label: string;
  amount: number;
  icon: keyof typeof icons;
};

export const icons = {
  CalendarTodayRoundedIcon,
  CreditCardIcon,
  TaskIcon,
  EventAvailableIcon,
  CreditCardOffIcon,
  EditNoteIcon,
  ReceiptIcon,
};

export const payroll: PayrollItems[] = [
  {
    label: "Total payroll",
    amount: 268,
    icon: "ReceiptIcon",
  },
  {
    label: "Draft",
    amount: 13,
    icon: "EditNoteIcon",
  },
  {
    label: "Overdue",
    amount: 7,
    icon: "CalendarTodayRoundedIcon",
  },
  {
    label: "Failed",
    amount: 5,
    icon: "CreditCardOffIcon",
  },

  {
    label: "Scheduled",
    amount: 24,
    icon: "EventAvailableIcon",
  },
  {
    label: "Paid",
    amount: 312,
    icon: "TaskIcon",
  },
];
