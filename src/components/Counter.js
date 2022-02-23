import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {increaseCount} from "../action/index";
import { reducer } from './../reducer/reduce';

const Counter = () => {
  const myState = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  console.log("mysstte,",myState);

  return (
    <div>
      <h3> The count is currently: {myState}</h3>
      <button onClick={() => dispatch(increaseCount())}>increaseCount</button>
    </div>
  );
};
export default Counter;
