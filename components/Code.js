import React, { useState } from "react";

export default function Code({ code }) {
  const [showCode, setShowCode] = useState(false);
  const [copyText, setCopyText] = useState("Copy");
  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopyText("✅ Copied!");
    setTimeout(() => {
      setCopyText("Copy");
    }, 1000);
  };
  return (
    <div>
      <button
        className='text-blue-300 border-solid border-2 border-blue-300 text-xs hover:bg-blue-300 hover:text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mb-2'
        type='submit'
        onClick={() => setShowCode(!showCode)}
      >
        {showCode ? "Hide the Code" : "Show the Code 👇"}
      </button>
      {showCode && (
        <div className='relative'>
          <pre className='text-gray-800 bg-gray-300 rounded-md p-2'>
            <code>{code}</code>
          </pre>

          <button
            className='text-gray-500 text-xs hover:text-green-600 font-bold py-1 px-2 focus:outline-none focus:shadow-outline mb-2 absolute top-0 right-0 transform -translate-x-1 translate-y-1'
            type='submit'
            onClick={copyCode}
          >
            {copyText}
          </button>
        </div>
      )}
    </div>
  );
}
