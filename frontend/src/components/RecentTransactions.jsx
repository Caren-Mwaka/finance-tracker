import React from "react";

export default function RecentTransactions() {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="font-semibold mb-4">Recent Transactions</h3>

      <ul className="space-y-2">
        <li className="flex justify-between">
          <span>Groceries</span>
          <span className="text-red-500">- KES 2,500</span>
        </li>

        <li className="flex justify-between">
          <span>Salary</span>
          <span className="text-green-600">+ KES 85,000</span>
        </li>
      </ul>
    </div>
  );
}
