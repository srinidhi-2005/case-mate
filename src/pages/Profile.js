import { useNavigate } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { FaUserTie } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";

const Profile = () => {
  const navigate = useNavigate();

  const handlePasswordClick = () => {
    navigate("/password");
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-[#DEDEDE]">
      <div
        onClick={handleBack}
        className="absolute top-16 left-16 bg-[#800000] text-white p-2 rounded-full cursor-pointer hover:bg-[#990909] transition"
      >
        <ImHome size={22} />
      </div>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl min-h-[450px] p-1 overflow-hidden">
        {/* Header */}
        <div className="p-6">
          <h2 className="text-[#800000] text-3xl font-bold text-center">User Profile</h2>
        </div>
        <div className="h-[1px] bg-[#800000] w-full mt-[5px]"></div>
        {/* Profile Info */}
        <div className="p-7">
          <div className="mb-4 flex items-center space-x-3 mt-10">
            <FaUserTie size={40} className="text-[#800000]" />
            <div>
              <p className="text-2xl font-semibold text-black-400">Username</p>
              <p className="text-gray-900 text-lg">srinidhi</p>
            </div>
          </div>

          <div className="mb-6 flex items-center space-x-3 mt-10">
            <MdOutlineAttachEmail size={40} className="text-[#800000]" />
            <div>
              <p className="text-2xl font-semibold text-black-400">Email</p>
              <p className="text-gray-900 text-lg">srinidhi@gmail.com</p>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handlePasswordClick}
            className="w-full bg-[#800000] hover:bg-[#990909] text-white font-medium py-2 rounded transition mt-10"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;