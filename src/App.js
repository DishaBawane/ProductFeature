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
        { feature: newFeature, id: Math.random().toString(), voteCount: 1 },
      ];
    });
  };
  const addVoteHandler = (featureID) => {
    console.log("Add",featureID);
    const updatedFeatureList = featuresList.map((post)=>{
      if(post.id === featureID){
        return{...post,voteCount:post.voteCount+1}
      }
      return post;
    })
    setFeaturesList(updatedFeatureList);
  
  };
  const deleteVoteHandler = (featureID) => {
    console.log("delete",featureID);
    alert("Do You want To delete");
    const updatedFeatureList = featuresList.map((post)=>{
      if(post.id === featureID){
        return{...post,voteCount:post.voteCount-1}
      }
      return post;
    })
    setFeaturesList(updatedFeatureList);
    
  };
  return (
    <Fragment>
      <Header />
      <AddFeature onAddFeature={addFeatureHandler} />
      <PostFeature features={featuresList} addVoteHandler={addVoteHandler} deleteVoteHandler={deleteVoteHandler}/>
    </Fragment>
  );
}

export default App;
