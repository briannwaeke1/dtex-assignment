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
import styles from "./NavigationDrawer.module.scss";
import { NavigationDrawerProps } from "./NavigationDrawer.types.ts";
import { financesMenuItems, icons, teamMenuItems } from "./constants.ts";

export const NavigationDrawer = ({ open, onOpen }: NavigationDrawerProps) => {
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
                fontSize: 30,
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
              sx={{ color: "text.secondary", rotate: "180deg" }}
              onClick={onOpen}
            />
          </IconButton>
        </Box>
        {open && (
          <Card className={styles.drawerHeader_card}>
            <ViewComfyRoundedIcon sx={{ color: "text.secondary" }} />
            <Box className={styles.cardText}>
              <Typography>Dashboard</Typography>
            </Box>
          </Card>
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
        {teamMenuItems.map(({ label, icon }) => {
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
        {financesMenuItems.map(({ label, icon }) => {
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
