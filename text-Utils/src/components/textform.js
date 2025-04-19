import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Upper Case Enabled", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lower Case Enabled", "success");
  };
  const handleOnChange = (event) => {
    console.log("OnChange");
    setText(event.target.value);
  };
  const handleCopy = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text Copied", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  // const handleFindReplaceClick = () => {
  //   let newText = text.replace(findText, replaceText);
  //   setText(newText);
  // };
  const handleSpeakClick = () => {
    if (text.length > 0) {
      let newText = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(newText);
      props.showAlert("Speak Test Started", "success");
    } else {
      console.log("no words");
    }
  };
  const handleStopSpeakClick = () => {
    window.speechSynthesis.cancel();
    props.showAlert("Speak Test Stopped", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };
  const [text, setText] = useState("");
  // const [findText, setFindText] = useState("");
  // const [replaceText, setReplaceText] = useState("");
  return (
    <>
      <div className="container textFormContainer">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary btn2" onClick={handleLowClick}>
          Convert to Lower case
        </button>
        <button className="btn btn-primary btn3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary btn3" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary btn3" onClick={handleSpeakClick}>
          Speak Test
        </button>
        <button className="btn btn-primary btn3" onClick={handleStopSpeakClick}>
          Stop Speak Test
        </button>
        <button className="btn btn-primary btn3" onClick={handleExtraSpaces}>
          Delete Extra Spaces
        </button>
      </div>
      <div className="container mt-3 textFormContainer">
        <h2>Your text summary</h2>
        <p>
          {text.trim() === ""
            ? "0 words and 0 characters"
            : `${text.trim().split(/\s+/).length} words and ${
                text.length
              } characters`}
        </p>

        <p>{text.split(" ").length * 0.08} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here."}</p>
      </div>
      {/* <div className="container mb-3 textFormContainer1">
        <h2>Find and Replace</h2>
        <input
          type="text"
          className="form-control my-2"
          placeholder="Find text"
          value={findText}
          onChange={(e) => setFindText(e.target.value)}
        />
        <input
          type="text"
          className="form-control my-2"
          placeholder="Replace with"
          value={replaceText}
          onChange={(e) => setReplaceText(e.target.value)}
        />
        <button
          className="btn btn-primary my-1"
          onClick={handleFindReplaceClick}
        >
          Find and Replace
        </button>
      </div> */}
    </>
  );
}
