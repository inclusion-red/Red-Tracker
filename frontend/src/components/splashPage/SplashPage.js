import React from "react";
import cssStyles from "./SplashPage.module.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardActions
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// todo: add a line in medium-devices between card sections
const useStyles = makeStyles(theme => ({
  card: {
    width: "90%",
    textAlign: "center",
    "@media(min-width: 768px)": {
      width: "40%",
    },
    margin: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    overflow: "visible",
    display: "flex",
    flexFlow: "wrap",
    padding: "15px 0"
  },
  button: {
    color: "#fff",
    backgroundColor: theme.palette.secondary.light
  },
  applyBtn: {
    backgroundColor: theme.palette.secondary.light,
    color: "inherit",
    margin: "auto"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  cardSection: {
    width: "100%",
    "@media(min-width: 768px)": {
      width: "50%",
    },
    display: "inline-block",
    heigh: "100%",
    display: "flex",
    flexDirection: "column"
  },
  // bad naming.....
  secondSection: {
    "@media(min-width: 768px)": {
      borderLeft: "1px solid rgb(167, 167, 167)"
    }
  },
  buttonWrapper: {
    marginTop: "auto"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={cssStyles.backgroundImage}>
      <Card className={classes.card}>
        <div className={classes.cardSection}>
          <CardContent className={classes.cardContent}>
            <Typography
              className={classes.title}
              variant="h4"
              color="textSecondary"
              gutterBottom>
              Admin
            </Typography>
            <Typography variant="body1">
              Create, manage, and track applications. With easy to use interface. Log in to get Started.
            </Typography>
          </CardContent>
          <CardActions className={classes.buttonWrapper}>
            <Link to="/Login" className={cssStyles.link}>
              <Button size="large" className={classes.applyBtn}>
                Login
              </Button>
            </Link>
          </CardActions>
        </div>
        <div className={`${classes.cardSection} ${classes.secondSection}`}>
          <CardContent className={classes.cardContent}>
            <Typography
              className={classes.title}
              variant="h4"
              color="textSecondary"
              gutterBottom>
              Applicant
            </Typography>
            <Typography variant="body1">
              Find an application to fill or browse our forms. Click below to get started.
            </Typography>
          </CardContent>
          <CardActions className={classes.buttonWrapper}>
            <Link to="/applicantforms" className={cssStyles.link}>
              <Button size="large" className={classes.applyBtn}>
                Find Application
              </Button>
          </Link>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}

export default App;
