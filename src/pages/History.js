import { FaRegFileAlt, FaRegEdit, FaRegTrashAlt, FaRegQuestionCircle } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImHome } from "react-icons/im";

const historyData = [
  {
    title: "Research Paper Summary",
    date: "May 12, 2025, 02:30 PM",
    desc: "This research paper explores the impact of artificial intelligence on climate change mitigation strategies. The authors propose several novel approaches that leverage machine learning to optimize energy consumption in urban areas.",
    file: "AI_Climate_Research.pdf",
    questions: 2,
  },
  {
    title: "Marketing Strategy Document",
    date: "May 10, 2025, 09:15 AM",
    desc: "This document outlines the Q3 marketing strategy focusing on digital channels and influencer partnerships. Key performance indicators include engagement rates, conversion metrics, and brand sentiment analysis.",
    file: "Q3_Marketing_Strategy.docx",
    questions: 4,
  },
  {
    title: "Legal Contract Analysis",
    date: "May 8, 2025, 11:45 AM",
    desc: "This contract details the partnership agreement between two technology companies for joint product development. Key sections cover intellectual property rights, revenue sharing models, and termination clauses.",
    file: "Partnership_Agreement_v3.pdf",
    questions: 2,
  },
  {
    title: "Product Requirements Document",
    date: "May 5, 2025, 04:20 PM",
    desc: "This PRD outlines the specifications for the next version of the mobile application. It includes user stories, technical requirements, design specifications, and timeline milestones for development phases.",
    file: "Mobile_App_PRD_v2.1.docx",
    questions: 0,
  },
  {
    title: "Financial Report Q1 2025",
    date: "May 1, 2025, 10:00 AM",
    desc: "The Q1 financial report shows a 12% increase in revenue compared to the previous quarter. Operating expenses remained stable while customer acquisition costs decreased by 8%. The report projects continued growth in Q2.",
    file: "Q1_2025_Financial_Report.pdf",
    questions: 4,
  },
];

const filters = [
  { label: "All" },
  { label: "With Questions" },
];

const History = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home');
  };

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter logic (for demonstration, only "All" is functional)
  const filteredData = historyData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-[#f3f4f6]">
      <div
        onClick={handleHomeClick}
        className="absolute top-16 left-16 bg-[#800000] text-white p-2 rounded-full cursor-pointer hover:bg-[#990909] transition"
      >
        <ImHome size={22} />
      </div>
      <div className="w-3/4 mx-auto pt-8">
        <h2 className="text-5xl font-bold mb-6 text-[#800000] text-center mt-16">Document History</h2>
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search history..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#800000] bg-white"
            />
          </div>
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f.label}
                className={`px-4 py-1 rounded-full text-sm font-medium border ${
                  activeFilter === f.label
                    ? "bg-[#800000] text-white border-[#990909]"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
                onClick={() => setActiveFilter(f.label)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* History List */}
        <div className="flex flex-col gap-4">
          {filteredData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm p-5 flex flex-col gap-2 border border-gray-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <div className="text-xs text-gray-500 mb-1">{item.date}</div>
                </div>
                <div className="flex gap-2">
                  <button className="text-gray-400 hover:text-[#800000]">
                    <FaRegEdit />
                  </button>
                  <button className="text-gray-400 hover:text-red-500">
                    <FaRegTrashAlt />
                  </button>
                </div>
              </div>
              <div className="text-gray-700 text-sm">{item.desc}</div>
              <div className="flex justify-between items-center mt-2">
                <a href="#" className="text-xs text-[#800000] hover:underline flex items-center gap-1">
                  <FaRegFileAlt /> {item.file}
                </a>
                {item.questions > 0 && (
                  <a href="#" className="text-xs text-[#800000] hover:underline flex items-center gap-1">
                    <FaRegQuestionCircle /> {item.questions} questions
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;