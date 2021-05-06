import React from "react";
import { Grid, Container, makeStyles } from "@material-ui/core";
import "./App.css";
import Header from "./Compnents/Header";
import RightSideNav from "./Compnents/RightSideNav";
import LeftSideNav from "./Compnents/LeftSideNav";
import Feed from "./Compnents/Feed";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginLeft: "7.5%",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Header />
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs>
          <RightSideNav />
        </Grid>
        <Grid item xs={6}>
          <Feed />
        </Grid>
        <Grid item xs>
          <LeftSideNav />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
