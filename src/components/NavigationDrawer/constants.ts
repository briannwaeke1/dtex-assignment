import AddAlarmIcon from "@mui/icons-material/AddAlarm";
import ArticleIcon from "@mui/icons-material/Article";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import CampaignIcon from "@mui/icons-material/Campaign";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import PaidIcon from "@mui/icons-material/Paid";
import PeopleIcon from "@mui/icons-material/People";
import PercentIcon from "@mui/icons-material/Percent";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import TaskIcon from "@mui/icons-material/Task";

interface MenuItems {
  label: string;
  icon: keyof typeof icons;
}

export const icons = {
  PeopleIcon,
  PersonAddAlt1Icon,
  CalendarTodayRoundedIcon,
  AddAlarmIcon,
  FavoriteIcon,
  PaidIcon,
  OfflineBoltIcon,
  ArticleIcon,
  CampaignIcon,
  PercentIcon,
  CreditCardIcon,
  LoyaltyIcon,
  TaskIcon,
};

export const teamMenuItems: MenuItems[] = [
  { label: "Employee", icon: "PeopleIcon" },
  { label: "Onboarding", icon: "PersonAddAlt1Icon" },
  { label: "Leave", icon: "CalendarTodayRoundedIcon" },
  { label: "Time tracking", icon: "AddAlarmIcon" },
  { label: "Rewards", icon: "LoyaltyIcon" },
  { label: "Costs", icon: "PercentIcon" },
  { label: "Compensation", icon: "OfflineBoltIcon" },
  { label: "Requests", icon: "ArticleIcon" },
  { label: "Feedback", icon: "CampaignIcon" },
];

export const financesMenuItems: MenuItems[] = [
  { label: "Payroll", icon: "PaidIcon" },
  { label: "Invoices", icon: "CreditCardIcon" },
  { label: "Billing", icon: "TaskIcon" },
];
