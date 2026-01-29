import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import React from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-600">
        Budget Tracker
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          Hello, {user?.name || "User"}
        </span>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
