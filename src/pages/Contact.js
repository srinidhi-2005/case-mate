import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Contact = () => {

  const handleAboutClick = () => {
    const aboutSection = document.getElementById('welcome-sec');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFeaturesClick = () => {
    const featuresSection = document.getElementById('features-sec');
    if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="contact-sec" className="flex flex-col min-h-screen bg-white">
      <div className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 uppercase tracking-wide flex items-center justify-center gap-[10px] text-current">
          SEND US AN EMAIL
          <MdOutlineMarkEmailUnread className="text-[#800000]" />
        </h2>
          <div className="w-10 h-1 bg-[#800000] mx-auto mb-4 rounded"></div>
          <p className="text-center text-gray-500 mb-8">
            Drop us a line by using the below form.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="bg-gray-100 p-4 rounded outline-none focus:ring-2 focus:ring-[#800000] text-gray-700"
              />
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-gray-100 p-4 rounded outline-none focus:ring-2 focus:ring-[#800000] text-gray-700"
              />
              <input
                type="text"
                placeholder="SUBJECT"
                className="bg-gray-100 p-4 rounded outline-none focus:ring-2 focus:ring-[#800000] text-gray-700"
              />
            </div>
            <textarea
              placeholder="YOUR MESSAGE"
              className="bg-gray-100 p-4 rounded h-full min-h-[140px] outline-none focus:ring-2 focus:ring-[#800000] text-gray-700 resize-none"
            />
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#800000] hover:bg-[#990909] text-white font-semibold py-4 rounded transition-colors duration-200 uppercase tracking-wide"
              >
                SEND YOUR MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="bg-gray-700 text-gray-300 pt-12 pb-6 mt-12">
        <div className="w-[75%] mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-2">TEXT SUMMARIZER</h3>
            <p className="mb-1 text-sm">
              Empowering legal minds with instant insights.
            </p>
            <p className="mb-4 text-sm">
              Summarize, question, and understand — all in one place.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2 border-b-2 border-[#800000] inline-block pb-1">Links</h4>
            <ul className="text-sm space-y-2 mt-2">
              <li>
                <button
                  onClick={handleAboutClick}
                  className="hover:underline text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={handleFeaturesClick}
                  className="hover:underline text-left"
                >
                  Features
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2 border-b-2 border-[#800000] inline-block pb-1">Connect</h4>
            <div className="flex gap-[16px] mt-2">
                <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:text-3xl"
                >
                <FaGithub />
                </a>
                <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:text-3xl"
                >
                <FaLinkedin />
                </a>
            </div>
            </div>
        </div>
        <div className="w-[75%] mx-auto px-4 flex justify-center items-center border-t border-gray-700 pt-6 text-sm text-gray-400">
          <div>© Copyright 2025 TEXT SUMMARIZER. All Right Reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;