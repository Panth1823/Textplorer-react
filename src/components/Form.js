import React, { useState } from "react";

export default function Form(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDownClick = () => {
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearclick = () => {
    let newText = "";
    setText(newText);
  };
 const handleCopyclick=()=>{
  let text =document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);

 };
 const handleWhiteSpace = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
};
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text Here");
  // setText("new text");
  return (
    <>
      <div>
        <div className="mb-3">
          <label className="mybox">{props.heading}</label>
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="mybox"
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-dark" onClick={handleUpClick}>
          Uppercase
        </button>{" "}
        <button className="btn btn-dark" onClick={handleDownClick}>
          Lowercase
        </button>
        <button className="btn btn-dark mx-1" onClick={handleClearclick}>
          Clear Text
        </button>
        <button className="btn btn-dark mx-1" onClick={handleCopyclick}>
          Copy Text
        </button>
        <button className="btn btn-dark mx-1" onClick={handleWhiteSpace}>
          Remove Whitespace
        </button>
        
      </div>

      <h2 className="card-title my-3"> Stats for Nerds🤓</h2>
      <div className="card">
        <div className="card-body">
          <div className="card-text">
            {" "}
            <h4>
              Text Summary : <u><b>{text.split(" ").filter((element)=>{return element.length!=0}).length}</b></u> words and{" "}
              <u><b>{text.length} </b></u> characters
            </h4>
            <h4>
              Time Required to read text :{" "}
              <u><b>{0.008 * text.split(" ").length}</b></u>
              minutes or <u><b>{0.48 * text.split(" ").length}</b></u> seconds
            </h4>{" "}
          </div>
        </div>
      </div>
      <h2 className="card-title my-3">Preview👀</h2>
      <div className="card">
        <div className="card-body">
          <div className="card-text">
            {" "}
            <h4>{text.length>0?text:"Enter text in above textbox to preview here"}</h4>
          </div>
        </div>
      </div>
    </>
  );
  }
