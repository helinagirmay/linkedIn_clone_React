import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";

import MessageIcon from "@material-ui/icons/Message";
import WorkIcon from "@material-ui/icons/Work";
import PeopleIcon from "@material-ui/icons/People";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOptions from "./HeaderOptions";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  IconsList: {},
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.45),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  headerIconsList: {
    // display: "flex",
    // justifyContent: "space-between",
  },
  imageIcon: {
    objectFit: "contained",
    height: "40px",
    marginRight: "1%",
  },
  leftHeader: {
    marginLeft: "7%",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="#FFFFFF">
        <Toolbar>
          <div className={classes.leftHeader}>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
              className={classes.imageIcon}
            />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
          <div className={classes.grow} />
          <HeaderOptions Icon={HomeIcon} title="Home" />
          <HeaderOptions Icon={PeopleIcon} title="My Networks" />
          <HeaderOptions Icon={WorkIcon} title="Jobs" />
          <HeaderOptions Icon={MessageIcon} title="Messages" />
          <HeaderOptions Icon={NotificationsIcon} title="Notification" />
          <HeaderOptions Icon={AccountCircle} title="Me" />
        </Toolbar>
      </AppBar>
    </div>
  );
}
