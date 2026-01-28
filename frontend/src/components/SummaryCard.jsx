import React from "react"

export default function SummaryCard({ title, amount, highlight }) {
  return (
    <div
      className={`p-5 rounded-xl shadow-sm ${
        highlight ? "bg-green-100" : "bg-white"
      }`}
    >
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-2">
        KES {amount.toLocaleString()}
      </p>
    </div>
  );
}
