import React, { Fragment, useState } from "react";

import "./App.css";
import AddFeature from "./Components/Feature/AddFeature";
import PostFeature from "./Components/Feature/PostFeature";

import Header from "./Components/Layout/Header";
import Modal from "./UI/Modal";




function App() {
  const [featuresList, setFeaturesList] = useState([]);
  const [showModal,setShowModal]=useState(false);
  const [featureIdPass,setFeatureIdpass]=useState('');

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

  const openModal = (featureID)=>{
    setShowModal(true);
    setFeatureIdpass(featureID);
    
  }

  const closeModel=(featureID)=>{
    setShowModal(false);

    const updatedFeatureList = featuresList.map((post)=>{
      if(post.id === featureIdPass){
        return{...post,voteCount:post.voteCount-1}
      }
      return post;
    })
    setFeaturesList(updatedFeatureList);

  }



  return (

    <Fragment>
      <Header />
      { showModal && <Modal onClose={closeModel}/>}
      <AddFeature onAddFeature={addFeatureHandler} />
   
      <PostFeature features={featuresList} addVoteHandler={addVoteHandler} deleteVoteHandler={openModal}/>
    </Fragment>
  );
}

export default App;
