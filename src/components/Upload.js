"use client";
import React from "react";
import { ImUpload } from "react-icons/im";

const Upload = ({ files, setFiles, text, setText }) => {
  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    if (files.length > 0) {
      console.log("Uploaded files:", files);
      // handle file summarization logic here
    } else if (text.trim()) {
      console.log("Pasted text:", text);
      // handle text summarization logic here
    } else {
      alert("Please upload a file or paste text.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-[#800000] mb-4 text-center">Upload Text or Document</h2>

      <label
        htmlFor="fileInput"
        className="cursor-pointer border-2 border-dashed border-[#DEDEDE] rounded-lg flex flex-col items-center justify-center py-8 mb-4 bg-[#f3f4f6] hover:border-[#800000] transition"
      >
        <ImUpload className="text-4xl text-[#800000] mb-2"/>
        <div className="text-black mb-1">Drag and drop or click to browse</div>
        <div className="text-xs text-black-400">Supported: .txt, .pdf</div>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          accept=".txt,.pdf,.doc,.docx"
          multiple
          onChange={handleFileChange}
        />
      </label>

      {files.length > 0 && (
        <div className="mb-4 text-sm text-gray-700">
          <strong>Uploaded:</strong>
          <ul className="list-disc ml-6">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-4">
        <label className="block text-[#800000] mb-1">Or paste your text:</label>
        <textarea
          value={text}
          onChange={handleTextChange}
          className="w-full border border-[#DEDEDE] rounded p-2 min-h-[200px] focus:ring-2 focus:ring-[#800000] outline-none"
          placeholder="Enter or paste your text here..."
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-[#800000] text-white py-3 rounded font-semibold hover:bg-[#990909] transition"
      >
        Summarize Text
      </button>
    </div>
  );
};

export default Upload;