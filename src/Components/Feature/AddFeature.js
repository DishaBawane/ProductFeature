import React, { useState } from "react";
import classes from "./Addfeature.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";

const Addfeature = (props) => {
  const [feature, setNewFeature] = useState("");

  const addFeatureHandler = (event) => {
    event.preventDefault();
    if (feature.trim().length === 0) {
      return;
    }
    props.onAddFeature(feature);
    setNewFeature("");
  };

  const featureChangeHandler = (event) => {
    setNewFeature(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={addFeatureHandler}>
        <textarea
          type="text"
          className={classes.addFeature}
          cols="20"
          rows="3"
          maxLength="180"
          required
          placeholder="Enter your review!"
          value={feature}
          onChange={featureChangeHandler}
        />
        <Button />
      </form>
    </Card>
  );
};
export default Addfeature;
