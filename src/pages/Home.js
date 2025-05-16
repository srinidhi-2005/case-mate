import Navbar from "../components/Navbar";
import Upload from "../components/Upload";
import Results from "../components/Results";
import BeamsBackground from "../components/BeamsBackground";
import { useState } from "react";

const NAVBAR_HEIGHT = 70;

const DEFAULT_SUMMARY = "Summary will appear here after processing your text.";
const DEFAULT_CHAT = [
  { sender: "user", text: "What is football?" },
  { sender: "bot", text: "Football is a team sport played with a ball between two teams of 11 players each, aiming to score goals by getting the ball into the opposing team's net." },
];

const Home = () => {
  const [summary, setSummary] = useState(DEFAULT_SUMMARY);
  const [chat, setChat] = useState(DEFAULT_CHAT);
  const [input, setInput] = useState("");
  const [files, setFiles] = useState([]);
  const [text, setText] = useState("");

  const resetAll = () => {
    setSummary(DEFAULT_SUMMARY);
    setChat([]);
    setInput("");
    setFiles([]);
    setText("");
  };

  return (
    <div className="min-h-screen bg-[#DEDEDE] relative" style={{ zIndex: 1 }}>
      <BeamsBackground />
      <Navbar onNew={resetAll} />
      <div
        className="w-3/4 mx-auto flex flex-1 items-center justify-center relative"
        style={{ minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`, zIndex: 1 }}
      >
        <div className="w-full flex flex-col md:flex-row gap-20">
          <div className="w-full md:w-1/2 min-h-[500px]">
            <Upload files={files} setFiles={setFiles} text={text} setText={setText} />
          </div>
          <div className="w-full md:w-1/2 min-h-[500px]">
            <Results
              summary={summary}
              setSummary={setSummary}
              chat={chat}
              setChat={setChat}
              input={input}
              setInput={setInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;