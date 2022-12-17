import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./theme";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
});

const Child = () => {
  const classes = useStyles();
  return <button className={classes.root}>Click me!</button>;
};

export default Child;
