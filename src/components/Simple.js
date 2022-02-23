import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { simpleAction } from "../action/index";
import { Button } from "@mui/material";

const Simple = () => {
  const simpleList = useSelector((state) => state.simpleReducer);
  const dispath = useDispatch();
  console.log("simpleLiats", simpleList);
  return (
    <div >
      <h3>Simple message</h3>
      <h4>the message is currently <span style={{color:"orange"}}> "{simpleList}"</span></h4>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispath(simpleAction())}
      >
        Click
      </Button>
    </div>
  );
};
export default Simple;
