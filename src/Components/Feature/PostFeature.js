import React,{useState,useReducer} from "react";
import Card from "../../UI/Card";
import classes from "./PostFeature.module.css";


// const initialvotestate = 0;
// const reducer = (state, action) => {
  
//   // console.log(state, action);
//   if (action.type === "AddVote") {
//      state + 1;
        
//   }
//   if (action.type === "DeleteVote") {
      
//       return state - 1;
//   }
// //   return state;
// };


const PostFeature = (props) => {
const[likes,setLikes]=useState(0);


const addVoteHandler=()=>{
    setLikes(prev=>prev+1);

}
const deleteVoteHandler=()=>{
    setLikes(prev=>prev-1);

}


  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
//   const [state, dispatch] = useReducer(reducer, initialvotestate);
  return (
    <div>
      {props.features.map((feature) => (
        <Card key={feature.id}>
          <div className={classes.featurelist}>
            <div className={classes.votetracker}>
              <p onClick={addVoteHandler}>👍</p>

              <p className={classes.totalvotes}>{likes}</p>

              <p onClick={deleteVoteHandler}>👎</p>
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
