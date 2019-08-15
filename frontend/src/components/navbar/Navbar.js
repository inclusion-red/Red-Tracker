import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import cssStyles from "./Navbar.module.css";

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

const Navbar = () => {
  let classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography color="textPrimary" variant="h6" className={classes.title}>
          <Link to="/" className={cssStyles.link}>
            RED TRACKER
          </Link>
        </Typography>

        <Link to="/Login">
          <Button className={classes.button}>Login</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
