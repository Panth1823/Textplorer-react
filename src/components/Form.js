import React, { useState } from "react";
import Button from "./Button";

export default function Form(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    const handleClearclick = () => {
        setText("");
    };
    const handleCopyclick = () => {
        navigator.clipboard.writeText(text);
    };
    const handleWhiteSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState("");
    return (
        <>
            <div className="w-7/12">
                <label className="mybox flex justify-center items-center">{props.heading}</label>
                <div className=" box-content w-full container mx-auto flex justify-center items-center mb-10">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mx-auto"></label>
                    <textarea
                        id="message"
                        value={text}
                        onChange={handleOnChange}
                        resize="vertical"
                        className="no-scrollbar block p-2.5 text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-10 w-full font-mono resize-vertical"
                        placeholder="Write text here to analyze..."></textarea>
                </div>
                <div className="flex flex-wrap justify-center items-center">
                    <Button text="Uppercase" handleClick={handleUpClick} />
                    <Button text="Lowercase" handleClick={handleDownClick} />
                    <Button text="Copy text" handleClick={handleCopyclick} />
                    <Button text="Whitespace" handleClick={handleWhiteSpace} />
                    <Button text="Clear text" handleClick={handleClearclick} />
                </div>
            </div>
      
            <h2 className=" text-white font-mono text-2xl mt-10 pb-2 text-center"> Stats for Nerds 🤓</h2>
            <div className=" text-white font-mono text-xl block p-2.5 w-fit container mx-auto justify-center items-center m-auto bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div className=" text-white font-mono text-xl">
                    <div className=" text-white font-mono text-xl ">
                        {" "}
                        <h4 className="my-2 font-mono">
                            Text Summary :{" "}
                            <u className=" text-blue-400 font-mono">
                                <b>
                                    {
                                        text.split(" ").filter((element) => {
                                            return element.length !== 0;
                                        }).length
                                    }
                                </b>
                            </u>{" "}
                            words and{" "}
                            <u className=" text-blue-400 font-mono">
                                <b>{text.length} </b>
                            </u>{" "}
                            characters
                        </h4>
                        <h4 className="font-mono my-2">
                            Time Required to read text :{" "}
                            <u className=" text-blue-400">
                                <b>{0.008 * text.split(" ").length}</b>
                            </u>{" "}
                            minutes or{" "}
                            <u className=" text-blue-400">
                                <b>{0.48 * text.split(" ").length}</b>
                            </u>{" "}
                            seconds
                        </h4>{" "}
                    </div>
                </div>
            </div>
            <h2 className=" text-white font-mono text-2xl mt-10 text-center pb-2">Preview 👀</h2>
            <div className=" w-8/12 container mx-auto flex justify-center items-center m-auto text-white font-mono text-xl p-2.5 mb-10 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                {" "}
                <h4>{text.length > 0 ? text : "Enter text in above textbox to preview here..."}</h4>
            </div>
        </>
      );
}
