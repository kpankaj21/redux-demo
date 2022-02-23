import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { simpleAction } from "../action/index";

const Simple = () => {
  const simpleList = useSelector((state) => state.simpleReducer.result);
  const dispathc = useDispatch();
  return (
    <div>
      <h3>Simple</h3>
      <h4>the message is currently "{simpleList}"</h4>

      <button onClick={() => dispathc(simpleAction())}>Click</button>
    </div>
  );
};
export default Simple;
