import { Link } from "react-router-dom";
import React from "react";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Monthly Budget Tracker</h1>
      <p className="text-gray-600 mb-8 max-w-md text-center">
        Track your income, expenses, and savings in one simple dashboard.
      </p>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-6 py-2 bg-blue-600 text-white rounded"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-6 py-2 border border-blue-600 text-blue-600 rounded"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
