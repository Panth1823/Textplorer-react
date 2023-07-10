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
  const handleCopyclick = () => {
    let text = document.getElementById("mybox");
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
        <label className="mybox">{props.heading}</label>
        <div className=" box-content  min-w-full container mx-auto">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <textarea
            id="message"
            value={text}
            onChange={handleOnChange}
            rows="5"
            class="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-10 w-full font-mono"
            placeholder="Write text here to analyze..."
          ></textarea>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-3 ml-5"
          onClick={handleUpClick}
        >
          Uppercase
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-3 ml-5"
          onClick={handleDownClick}
        >
          Lowercase
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-3 ml-5"
          onClick={handleCopyclick}
        >
          Copy Text
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-3 ml-5"
          onClick={handleWhiteSpace}
        >
          Whitespace
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-5 ml-5"
          onClick={handleClearclick}
        >
          Clear Text
        </button>
      </div>

      <h2 className=" text-white font-mono text-xl mt-10"> Stats for Nerds 🤓</h2>
      <div className=" text-white font-mono text-xl block p-2.5  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <div className=" text-white font-mono text-xl">
          <div className=" text-white font-mono text-xl ">
            {" "}
            <h4 className=" font-mono">
              Text Summary :{" "}
              <u className=" text-teal-400 font-mono">
                <b>
                  {
                    text.split(" ").filter((element) => {
                      return element.length !== 0;
                    }).length
                  }
                </b>
              </u>{" "}
              words and{" "}
              <u className=" text-teal-400 font-mono">
                <b>{text.length} </b>
              </u>{" "}
              
              {" "}
              characters
            </h4>
            <h4 className="font-mono">
              Time Required to read text :{" "}
              <u className=" text-teal-400">
                <b>{0.008 * text.split(" ").length}</b>
              </u>{" "}
              minutes or{" "}
              <u className=" text-teal-400" >
                <b>{0.48 * text.split(" ").length}</b>
              </u>{" "}
              seconds
            </h4>{" "}
          </div>
        </div>
      </div>
      <h2 className=" text-white font-mono text-xl mt-10">Preview 👀</h2>
      <div className=" text-white font-mono text-xl block p-2.5  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <div className=" text-white font-mono text-xl">
          <div className=" text-white font-mono text-xl">
            {" "}
            <h4>
              {text.length > 0
                ? text
                : "Enter text in above textbox to preview here"}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
