import React from 'react'
import {useState} from 'useState'
const {result,setResult}=useState("");
const handleclick=(event)={
  setResult(result.concat(event.target.value));
};
const cleardisplay=()={
  setResult("0");
};
const calculate=()={
  setResult(eval(result).toString());
};

function app() {
  return(
  <>
  <div>
    <input type='text' placeholder='0' id='result' >${result}</input>
    <input type='button' value='1' class='inputs' onclick={handleclick}></input>
    <input type='button' value='2' class='inputs' onclick={handleclick}></input>
    <input type='button' value='3' class='inputs' onclick={handleclick}></input>
    <input type='button' value='4' class='inputs' onclick={handleclick}></input>
    <input type='button' value='5' class='inputs' onclick={handleclick}></input>
    <input type='button' value='6' class='inputs' onclick={handleclick}></input>
    <input type='button' value='7' class='inputs' onclick={handleclick} ></input>
    <input type='button' value='8' class='inputs' onclick={handleclick}></input>
    <input type='button' value='9' class='inputs' onclick={handleclick}></input>
    <input type='button' value='0' class='inputs' onclick={handleclick}></input>
    <input type='button' value='+' class='inputs' onclick={handleclick}></input>
    <input type='button' value='-' class='inputs' onclick={handleclick}></input>
    <input type='button' value='*' class='inputs' onclick={handleclick}></input>
    <input type='button' value='/' class='inputs' onclick={handleclick}></input>
    <input type='button' value='.' class='inputs' onclick={handleclick}></input>
    <input type='button' value='Clear' class='excess' onclick={cleardisplay}></input>
    <input type='button' value='=' class='excess' onclick={calculate}></input>
  </div>
  </>
  )
}


export default app;


