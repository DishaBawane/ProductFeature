import React from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

const Modal = (props) => {
  return createPortal(
    <div className={classes.modal}>
      <p>Are You sure you want to dislikeVotes?</p>
      <button type="submit" onClick={()=>props.onClose()} className={classes.button}>
        Confirm
      </button>
    </div>,
    document.querySelector("#modal")
  );
};
export default Modal;
