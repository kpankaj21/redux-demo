import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "../action/index";

const Counter = () => {
  const myState = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  console.log("mysstte,", myState);

  return (
    <div >
      <h3> The count is currently:<span style={{color:"blue"}}>{myState}</span></h3>
      <Button variant="contained" onClick={() => dispatch(increaseCount())}>
        +
      </Button>
    </div>
  );
};
export default Counter;
