import React from "react";
import { createUseStyles } from "react-jss";

// import Card from "@material-ui/core/Card"
// import CardActionArea from "@material-ui/core/CardActionArea"
// import CardContent from "@material-ui/core/CardContent"
// import CardMedia from "@material-ui/core/CardMedia"
// import Typography from "@material-ui/core/Typography"
// import AspectRatioIcon from "@material-ui/icons/AspectRatio"
// import { Grid, IconButton } from "@material-ui/core"
// import MeetingRoomIcon from "@material-ui/icons/MeetingRoom"
// import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
// import CloseIcon from "@material-ui/icons/Close"

const useStyles = createUseStyles({
  root: {
    maxWidth: 230,
    position: "relative",
    zIndex: 1001,
    background:"white"
  },
  media: {
    height: 100,
  },
  close: {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1001,
    background: "white",
    width: "25px",
    height: "25px",
  },
});

export default function ApartmentCard(props) {
    // console.log("card", props)
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3> {props.name}</h3>
      <p>MORE DUMMY DATA</p>

    </div>
  );
}
