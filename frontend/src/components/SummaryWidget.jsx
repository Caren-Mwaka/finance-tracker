import React from "react";

export default function SummaryWidget({ title, amount, highlight }) {
  return (
    <div
      className={`bg-white rounded-xl shadow p-5 flex flex-col gap-2 ${
        highlight ? "border-2 border-green-500" : ""
      }`}
    >
      <p className="text-gray-500 text-sm">{title}</p>

      <h2 className="text-2xl font-bold">
        KES {amount.toLocaleString()}
      </h2>

      <span className="text-xs text-gray-400">
        Updated this month
      </span>
    </div>
  );
}
