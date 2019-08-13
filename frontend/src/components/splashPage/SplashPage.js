import React from "react";
import cssStyles from "./SplashPage.module.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Card,
  CardContent,
  CardActions
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    width: "40%",
    height: "40%",
    margin: "10% auto",
    // position: "absolute",
    // top: "30%",
    // left: "30%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    overflow: "visible"
  },
  title: {
    flexGrow: 1
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
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={cssStyles.backgroundImage}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.title}
            variant="h4"
            color="textSecondary"
            gutterBottom
          >
            GO AQUAMARIEN GO!!
          </Typography>
          <Typography variant="body1">
            At Inclusion, our programs are not just about coding. You will also
            have access to both a career and technical mentor from Twilio,
            networking opportunities, and lunch and learns. If you’re a
            dedicated learner looking to level up, then this is the course for
            you.
          </Typography>
        </CardContent>
        <CardActions gutterBottom>
          <Button size="large" className={classes.applyBtn}>
            <Link to="/newForm">Apply Now</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
