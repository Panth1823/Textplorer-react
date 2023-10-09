import React, { useState } from "react";

export default function Form(props) {
    const handleUpClick = () => {
        let newText = originalText.toUpperCase();
        setText(newText);
    };
    const handleDownClick = () => {
        let newText = originalText.toLowerCase();
        setText(newText);
    };
    const handleClearclick = () => {
        setOriginalText("");
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
        setOriginalText(event.target.value);
        setText(event.target.value);
    };

    const [originalText, setOriginalText] = useState("");
    const [text, setText] = useState("");
    // setText("new text");
    return (
        <>
            <div className="w-7/12">
                <label className="mybox flex justify-center items-center">{props.heading}</label>
                <div className=" box-content w-full container mx-auto flex justify-center items-center mb-10 mx-auto">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mx-auto"></label>
                    <textarea
                        id="message"
                        value={originalText}
                        onChange={handleOnChange}
                        rows="5"
                        className="no-scrollbar block p-2.5 text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-10 w-full font-mono "
                        placeholder="Write text here to analyze..."></textarea>
                </div>
                <div className="flex justify-center items-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-3 ml-5 "
                        onClick={handleUpClick}>
                        Uppercase
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-3 ml-5"
                        onClick={handleDownClick}>
                        Lowercase
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-3 ml-5"
                        onClick={handleCopyclick}>
                        Copy text
                    </button>

                    <button
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-3 ml-5"
                        onClick={handleWhiteSpace}>
                        Whitespace
                    </button>

                    <button
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-3 ml-5"
                        onClick={handleClearclick}>
                        Clear text
                    </button>
                </div>
            </div>

            <h2 className=" text-white font-mono text-2xl mt-10 pb-2 text-center"> Stats for Nerds 🤓</h2>
            <div className=" text-white font-mono text-xl block p-2.5 w-fit container mx-auto flex justify-center items-center m-auto bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
            <div className=" w-8/12 container mx-auto flex justify-center items-center m-auto text-white font-mono text-xl block p-2.5 mb-10 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                {" "}
                <h4>{text.length > 0 ? text : "Enter text in above textbox to preview here..."}</h4>
            </div>
        </>
    );
}
