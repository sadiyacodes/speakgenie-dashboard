import React, { useState } from "react";
import {
  Home,
  BarChart,
  Trophy,
  Settings,
  User,
  UserCircle,
  ChartColumnBig,
  SquareMenu,
} from "lucide-react";
import { Box, IconButton, Typography } from "@mui/material";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const MySideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  // const navLinks = [
  //   { name: "Dashboard", href: "/dashboard", icon: Home },
  //   { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
  //   { name: "Students", href: "/students", icon: User },
  //   { name: "Analytics", href: "/analytics", icon: ChartColumnBig },
  //   { name: "Settings", href: "/settings", icon: Settings },
  // ];
  const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: "black",
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to="/" />
      </MenuItem>
    );
  };
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: "black !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "blue !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "blue !important",
        },
        "& .pro-menu-item.active": {
          color: "white !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" style={{ color: "blue" }}>
                  SpeakGenie
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <SquareMenu />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              // to="/"
              icon={<Home />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="LeaderBoard"
              // to="/"
              icon={<Trophy />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Students"
              // to="/"
              icon={<User />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Analytics"
              // to="/"
              icon={<ChartColumnBig />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Settings"
              // to="/"
              icon={<Settings />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};
export default MySideBar;
