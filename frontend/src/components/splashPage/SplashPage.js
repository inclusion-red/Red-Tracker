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

const useStyles = makeStyles(theme => ({
  card: {
    width: "40%",
    height: "40%",
    "@media(max-width: 1038px)": {
      width: "43%",
      height: "42%"
    },
    "@media(max-width: 970px)": {
      width: "43%",
      height: "45%"
    },
    "@media(max-width: 830px)": {
      width: "45%",
      height: "47%"
    },
    "@media(max-width: 790px)": {
      width: "47%",
      height: "50%"
    },
    "@media(max-width: 694px)": {
      width: "50%",
      height: "52%"
    },
    "@media(max-width: 655px)": {
      width: "52%",
      height: "55%"
    },
    "@media(max-width: 608px)": {
      width: "55%",
      height: "58%"
    },
    "@media(max-width: 507px)": {
      width: "58%",
      height: "61%"
    },
    "@media(max-width: 433px)": {
      width: "60%",
      height: "64%"
    },
    "@media(max-width: 410px)": {
      width: "62%",
      height: "67%"
    },
    "@media(max-width: 381px)": {
      width: "65%",
      height: "70%"
    },
    margin: "10% auto",
    position: "absolute",
    top: "15%",
    left: "30%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    overflow: "visible"
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
        <CardActions>
          <Button size="large" className={classes.applyBtn}>
            <Link to="/newForm" className={cssStyles.link}>
              Apply Now
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
