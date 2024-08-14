import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
let myStyle;

if (props.mode === "dark") {
  myStyle = {
    backgroundColor : "#55565B",
    color : "white",

  }
}
else{
  myStyle = {
    backgroundColor : "white",
  }
}

  const setUpper = ()=>{
    setText(text.toUpperCase())
  }

  const setLower = ()=>{
    setText(text.toLowerCase())
  }

  function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

  const titelize = ()=>{
    setText(toTitleCase(text))
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const clearText = (event)=>{
    setText("");
  }

  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1> {props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} style={myStyle} placeholder={"Enter text Here"} value={text} autoFocus={true} rows="12"></textarea>
      </div>
      <button className={`btn ${props.mode === "light" ? "btn-dark" : "btn-secondary"} mx-3`} onClick={setUpper}> Capitalize Text </button>
      <button className={`btn ${props.mode === "light" ? "btn-dark" : "btn-secondary"} mx-3`} onClick={setLower}> Lower Case </button>
      <button className={`btn ${props.mode === "light" ? "btn-dark" : "btn-secondary"} mx-3`} onClick={titelize}> Titelize Text </button>
      <button className={`btn ${props.mode === "light" ? "btn-dark" : "btn-secondary"} mx-3`} onClick={clearText}> Clear Text </button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p> {text.split(" ").filter(n=>n).length} words and {text.length} characters </p>
      <p> {Math.round(0.008 * text.split(" ").length)} minutes read </p>
    </div>
  </>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
}