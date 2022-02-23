import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateForm } from "../action/index";
import { TextField } from '@mui/material';

const Form = () => {
  const formList = useSelector((state) => state.updateFormReducer);
  console.log("formLIst",formList);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h3>The Form object is <span style={{color:"green"}}> {JSON.stringify(formList)}</span></h3>

        <TextField
          type="text"
          value={formList.name}
          onChange={(e) => dispatch(updateForm({ name: e.target.value }))}
        />
         
        <TextField
          type="text"
          value={formList.age}
          onChange={(e) => dispatch(updateForm({ age: e.target.value }))}
        />
        
        <TextField
          type="text"
          value={formList.home}
          onChange={(e) => dispatch(updateForm({ home: e.target.value }))}
        />
      </div>
    </>
  );
};
export default Form;
