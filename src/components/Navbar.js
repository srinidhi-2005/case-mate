import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onNew }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/profile');
    };
    const handleHistoryClick = () => {
      navigate('/history');
    };
    const handleLoginClick = () => {
      navigate('/login');
    };
    const handleSignupClick = () => {
      navigate('/signup');
    };
    const handleWelcomeClick = () => {
      navigate('/');
    };


  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-3/4 z-50 bg-[#800000] px-6 py-4 flex items-center justify-between shadow rounded-b-xl">
      <div className="flex items-center gap-2">
        <span className="text-white text-2xl font-bold">
          <i className="fa-regular fa-file-lines mr-2" /> TextSummarizer
        </span>
      </div>
      <div className="flex items-center gap-7">
        <button className="bg-white text-[#800000] px-4 py-2 rounded font-semibold hover:bg-[#DEDEDE] transition" onClick={onNew}>
          New
        </button>
        <div className="relative">
          <button
            className="bg-white text-[#800000] px-4 py-2 rounded font-semibold hover:bg-[#DEDEDE] transition flex items-center"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            Account <span className="ml-1">▾</span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-7 min-w-full bg-white rounded shadow-lg z-50">
              <button onClick={handleProfileClick} className="block px-4 py-2">Profile</button>
              <button onClick={handleHistoryClick} className="block px-4 py-2">History</button>
              <button onClick={handleLoginClick} className="block px-4 py-2 text-[#800000]">Login</button>
              <button onClick={handleSignupClick} className="block px-4 py-2 text-[#800000]">Signup</button>
              <button onClick={handleWelcomeClick} className="block px-4 py-2 text-[#800000]">Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;