import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.secondary.dark,
    position: "static"
    // marginRight: theme.spacing(2)
  }
}));

const Navbar = () => {
  let classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          RED TRACKER
        </Typography>
        <Link to="/Login">
          <Button className={classes.button}>Login</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
