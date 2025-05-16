import { useState } from "react";

const Results = ({ summary, setSummary, chat, setChat, input, setInput }) => {
  // Placeholder send handler
  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setChat([...chat, { sender: "user", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 h-full flex flex-col min-h-[500px]">
      <h2 className="text-xl font-semibold text-[#800000] mb-4">Generated Summary</h2>
      <div className="bg-[#f3f4f6] rounded p-4 mb-4 text-gray-700">
        {summary}
      </div>
      <div className="flex-1 overflow-y-auto mb-4 px-1" style={{ maxHeight: 260 }}>
        {chat.map((msg, idx) => (
          <div key={idx} className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`rounded-lg px-4 py-2 text-sm max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-[#e0e7ff] text-gray-900"
                  : "bg-[#f3f4f6] text-[#800000] border border-[#e0e0e0]"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <form className="flex mt-auto" onSubmit={handleSend}>
        <input
          className="flex-1 border border-[#800000] rounded-l p-2"
          placeholder="Ask me anything about your document..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#800000] text-white px-4 py-2 rounded-r disabled:opacity-50"
          disabled={!input.trim()}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Results;