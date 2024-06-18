import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import ViewComfyRoundedIcon from "@mui/icons-material/ViewComfyRounded";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import {
  Box,
  Card,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import cn from "classnames";
import styles from "./SideDrawer.module.scss";
import { SideDrawerProps } from "./SideDrawer.types.ts";
import { financesItems, icons, teamManagementItems } from "./constants.ts";

export const SideDrawer = ({ open, onOpen }: SideDrawerProps) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      variant="permanent"
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 300 : 70,
          boxSizing: "border-box",
          backgroundColor: "#f7f8fc",
        },
      }}
    >
      <Box className={styles.drawerHeader}>
        <Box className={styles.row}>
          {open && (
            <AccountBoxRoundedIcon
              sx={{
                fontSize: 35,
                color: "red",
              }}
            />
          )}
          <IconButton
            className={cn({
              [styles.closedDrawer_button]: !open,
            })}
          >
            <ViewSidebarIcon
              sx={{ rotate: "180deg" }}
              onClick={onOpen}
            />
          </IconButton>
        </Box>
        {open && (
          <Box>
            <Card className={styles.drawerHeader_card}>
              <ViewComfyRoundedIcon />
              <Box className={styles.cardText}>
                <Typography>Dashboard</Typography>
              </Box>
            </Card>
          </Box>
        )}
      </Box>
      <Divider sx={{ ml: 2, mr: 2 }} />
      <List
        component="nav"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{
              backgroundColor: "#f7f8fc",
              display: open ? "block" : "none",
            }}
          >
            Team management
          </ListSubheader>
        }
      >
        {teamManagementItems.map(({ label, icon }) => {
          const Icon = icons[icon];
          return (
            <ListItem
              disablePadding
              key={label}
            >
              <ListItemButton disableRipple>
                <ListItemIcon sx={{ minWidth: 40, ml: 1 }}>
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider sx={{ ml: 2, mr: 2 }} />
      <List
        component="nav"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{
              backgroundColor: "#f7f8fc",
              display: open ? "block" : "none",
            }}
          >
            Finances
          </ListSubheader>
        }
      >
        {financesItems.map(({ label, icon }) => {
          const Icon = icons[icon];
          return (
            <ListItem
              disablePadding
              key={label}
            >
              <ListItemButton disableRipple>
                <ListItemIcon sx={{ minWidth: 40, ml: 1 }}>
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};
