import React from "react";
import Card from "../../UI/Card";
import classes from "./PostFeature.module.css";
// import Modal from "../../UI/Modal";


const PostFeature = (props) => {


  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return (
    <div>
     
      {props.features.sort((a,b)=>(a.voteCount > b.voteCount ? -1 : 1)).map((feature) => (
        <Card key={feature.id}>
          <div className={classes.featurelist}>
            <div className={classes.votetracker}>
              <p onClick={()=>props.addVoteHandler(feature.id)}>👍</p>

              <p className={classes.totalvotes}>{feature.voteCount}</p>

              <p onClick={()=>props.deleteVoteHandler(feature.id)}>👎</p>
            </div>
           
            <div>
              <p className={classes.feature}>{feature.feature}</p>
            </div>
          </div>
          <div className={classes.date}>
            {year}-{month < 10 ? `0${month}` : `${month}`}-{date}
          </div>
        </Card>
        
      ))}
     
     </div>
  );
};
export default PostFeature;
