import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { IoCaretBackOutline } from "react-icons/io5";

const Password = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/profile");
  };

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const passwordsMatch = newPassword && confirmPassword && newPassword === confirmPassword;
  const showWarning = newPassword && confirmPassword && newPassword !== confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!passwordsMatch) return;

    // Simulate password change
    console.log("Current:", currentPassword);
    console.log("New:", newPassword);

    // Show success message
    setSuccessMessage("Password changed successfully!");

    // Clear all inputs
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    // Optionally hide the message after a few seconds
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center bg-[#f3f4f6]">
      <div
        onClick={handleBack}
        className="absolute top-16 left-16 bg-[#800000] text-white p-2 rounded-full cursor-pointer hover:bg-[#990909] transition"
      >
        <IoCaretBackOutline size={22} />
      </div>
      <h1 className="text-4xl font-extrabold mb-2 mt-[-60px] text-center text-[#800000]">Change Password</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Keep your account secure with a strong password
      </p>
      <form className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl" onSubmit={handleSubmit}>
        {/* Current Password */}
        <div className="mb-6">
          <label className="block font-semibold mb-2" htmlFor="current">
            Current Password
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FaLock />
            </span>
            <input
              id="current"
              type={showCurrent ? "text" : "password"}
              className="w-full border border-gray-300 rounded px-10 py-3 focus:outline-none focus:ring-2 focus:ring-[#800000] bg-white"
              placeholder="Enter current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              onClick={() => setShowCurrent((v) => !v)}
              tabIndex={-1}
            >
              {showCurrent ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div className="mb-6">
          <label className="block font-semibold mb-2" htmlFor="new">
            New Password
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FaLock />
            </span>
            <input
              id="new"
              type={showNew ? "text" : "password"}
              className="w-full border border-gray-300 rounded px-10 py-3 focus:outline-none focus:ring-2 focus:ring-[#800000] bg-white"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              onClick={() => setShowNew((v) => !v)}
              tabIndex={-1}
            >
              {showNew ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Confirm New Password */}
        <div className="mb-6">
          <label className="block font-semibold mb-2" htmlFor="confirm">
            Confirm New Password
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FaLock />
            </span>
            <input
              id="confirm"
              type={showConfirm ? "text" : "password"}
              className="w-full border border-gray-300 rounded px-10 py-3 focus:outline-none focus:ring-2 focus:ring-[#800000] bg-white"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              onClick={() => setShowConfirm((v) => !v)}
              tabIndex={-1}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Warnings */}
        {showWarning && (
          <div className="mb-4 text-red-600 font-semibold text-center">
            New password and confirm password do not match.
          </div>
        )}
        {passwordsMatch && (
          <div className="mb-4 text-green-600 font-semibold text-center">
            Passwords match!
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#800000] hover:bg-[#990909] text-white font-semibold py-3 rounded-lg transition text-lg"
        >
          Change Password
        </button>

        {/* Success Message */}
        {successMessage && (
          <div className="mt-4 text-green-700 text-center font-semibold">{successMessage}</div>
        )}
      </form>
    </div>
  );
};

export default Password;