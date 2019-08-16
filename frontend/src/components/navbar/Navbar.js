import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import cssStyles from "./Navbar.module.css";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.secondary.dark,
    position: "static",
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "#fff"
  },
  button: {
    color: "#fff",
    backgroundColor: theme.palette.secondary.light
  }
}));

const handleClick = async () => {
  let response = await axios.get("/api/admin/logout");
  localStorage.setItem("data", undefined);
};

const Navbar = () => {
  let classes = useStyles();
  const [user, setUser] = useState(false);
  //let data = window.data;
  //console.log("Data: _____", data);
  let output = localStorage.getItem("data");
  console.log("OUtput: ", output);
  // if (output) {
  //   setUser(true);
  // }

  // useEffect(() => {
  //   if (output) {
  //     setUser(true);
  //   }
  //   console.log("User: ", user);
  // });

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography color="textPrimary" variant="h6" className={classes.title}>
          <Link to="/" className={cssStyles.link}>
            <span className={cssStyles.redText}>RED</span> TRACKER
          </Link>
        </Typography>
        {output & (output !== undefined) ? (
          <Button onClick={handleClick} className={classes.button}>
            Logout
          </Button>
        ) : (
          <Link to="/Login">
            <Button className={classes.button}>Login</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
