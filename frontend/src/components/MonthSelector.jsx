import React from "react"

export default function MonthSelector() {
  return (
    <div className="flex gap-2">
      <select className="border rounded-lg px-3 py-2">
        <option>January</option>
        <option>February</option>
        <option>March</option>
      </select>

      <select className="border rounded-lg px-3 py-2">
        <option>2026</option>
        <option>2025</option>
      </select>
    </div>
  );
}
