import React from "react";
import { fade, Badge, makeStyles, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 0.061,
    flexDirection: "column",
    display: "flex",
    justifyContent: "spacing",
    alignItems: "center",
    color: "gray",
    cursor: "pointer",
    position: "sticky",
    "&:hover": {
      color: "black",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    fontSize: "12px",
    fontWeight: "400",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
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
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  icon: {
    fontSize: "12px",
  },
}));

export default function HeaderOptions({ Icon, title }) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      {Icon && <Icon className={classes.icons} />}
      <h4 className={classes.title}>{title}</h4>
    </div>
  );
}
