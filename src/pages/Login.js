import { useNavigate } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleHomeClick = () => {
    navigate('/home');
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-[#f3f4f6]">
      <div
        onClick={handleHomeClick}
        className="absolute top-16 left-16 bg-[#800000] text-white p-2 rounded-full cursor-pointer hover:bg-[#990909] transition"
      >
        <ImHome size={22} />
      </div>
      <form className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-[#800000] text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#800000] bg-white"
          />
        </div>
        <div className="mb-6 relative">
          <label className="block text-lg font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#800000] bg-white pr-10"
          />
          <div
            className="absolute top-10 right-3 cursor-pointer text-gray-600 hover:text-[#800000]"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        <button
          type="submit"
          onClick={handleHomeClick}
          className="w-full bg-[#800000] hover:bg-[#990909] text-white font-semibold py-3 rounded-lg transition text-lg mb-3"
        >
          Login
        </button>
        <div className="text-center text-sm">
          Don't have an account?{" "}
          <button onClick={handleSignupClick} type="button" className="text-[#800000] hover:underline font-medium">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;