import React, { Fragment } from "react";
import Card from "./Card";
import classes from "./Modal.module.css";
const ErrorModal = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}/>
          <h2>{props.title}</h2>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <button className={classes.okaybutton}>Okay</button>
          </footer>
     
      </Card>
    </Fragment>
  );
};
export default ErrorModal;

