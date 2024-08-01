import React,{useState} from "react";

function Toggle() {
  const[ison,setison]=useState(false)
  function handleclick(){
    setison((ison)=>!ison);
  }

  const color = ison ? "red" : "white";
  return
   <button style={background.color} onClick={handleclick}>{ison?on:off}</button>;
}

export default Toggle;
