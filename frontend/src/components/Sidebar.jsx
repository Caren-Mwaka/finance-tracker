import React from "react"

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen p-6">
      <h1 className="text-xl font-bold text-green-600 mb-10">
        Budget Tracker
      </h1>

      <nav className="flex flex-col gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/income">Income</Link>
        <Link to="/expenses">Expenses</Link>
        <Link to="/savings">Savings</Link>
        <Link to="/analytics">Analytics</Link>
      </nav>
    </aside>
  );
}
