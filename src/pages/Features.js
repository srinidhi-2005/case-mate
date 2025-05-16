import {useRef} from "react";
import { ImFolderUpload } from "react-icons/im";
import { PiFileTextDuotone } from "react-icons/pi";
import { TbMessageChatbot } from "react-icons/tb";
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineDownload } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";

const features = [
  {
    title: "Legal Document Upload",
    desc: "Upload legal documents (PDF, TXT) via a drag-and-drop interface for quick processing.",
    icon: <ImFolderUpload className="w-10 h-10 mx-auto mb-4 text-[#800000]"/>
  },
  {
    title: "Automatic Summarization",
    desc: "Generate abstractive or extractive summaries with customizable lengths (short, medium, or detailed).",
    icon: <PiFileTextDuotone className="w-10 h-10 mx-auto mb-4 text-[#800000]"/>
  },
  {
    title: "Interactive Chatbot",
    desc: "Chatbot-style interface to ask natural language questions based on uploaded legal documents.",
    icon: <TbMessageChatbot className="w-10 h-10 mx-auto mb-4 text-[#800000]"/>
  },
  {
    title: "Dashboard",
    desc: "View uploaded documents, summaries, and Q&A history.",
    icon: <MdSpaceDashboard className="w-10 h-10 mx-auto mb-4 text-[#800000]"/>
  },
  {
    title: "Download Summaries",
    desc: "Export summaries and answers into documents.",
    icon: <MdOutlineDownload className="w-10 h-10 mx-auto mb-4 text-[#800000]"/>
  },
  {
    title: "User Authentication",
    desc: "Secure login with role-based access (lawyer, client) and controlled document permissions.",
    icon: <FaUserLock className="w-10 h-10 mx-auto mb-4 text-[#800000]"/>
  },
];

const Features = () => {
  const featuresRef = useRef(null);
  return (
    <div ref={featuresRef} id="features-sec" className="bg-white pt-24 pb-16 mt-32 relative z-10">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#800000] mb-2">Key Features</h2>
        <p className="text-gray-600 text-lg">Discover what makes our text summarizer powerful and easy to use.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-[#dedede]/60 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 border border-[#e5e7eb] hover:border-[#800000]"
          >
            <div className="bg-white rounded-full p-4 shadow mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-[#800000] mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-center mb-4">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;