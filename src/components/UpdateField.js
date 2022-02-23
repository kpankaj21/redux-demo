import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector,useDispatch } from 'react-redux';
import { updateField } from "../action/index";
 

const UpdateField = () => {
//   const [field, setField] = useState("");

  const newList=useSelector((state) =>state.updateReducer)
  const dispatch =useDispatch();
  console.log("newListtt",newList);
  return (
    <div >
      <h3>Field</h3>
      <h4>The Field currently reads: <span style={{color:"red"}}>"{newList}"</span></h4>
      <TextField
        type="text"
        value={newList}
        onChange={(e) => dispatch(updateField(e.target.value))}
      />
    </div>
  );
};
export default UpdateField;
