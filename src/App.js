import React, { Fragment, useState } from "react";

import "./App.css";
import AddFeature from "./Components/Feature/AddFeature";
import PostFeature from "./Components/Feature/PostFeature";

import Header from "./Components/Layout/Header";

function App() {
  const [featuresList, setFeaturesList] = useState([]);

  const addFeatureHandler = (newFeature) => {
    setFeaturesList((prevFeaturesList) => {
      return [
        ...prevFeaturesList,
        { feature: newFeature, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <Header />
      <AddFeature onAddFeature={addFeatureHandler} />
      <PostFeature features={featuresList} />
    </Fragment>
  );
}

export default App;
