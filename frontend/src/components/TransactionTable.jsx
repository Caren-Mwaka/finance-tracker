import React from "react"

const mockData = [
  { name: "Rent", amount: 25000 },
  { name: "Electricity", amount: 3500 },
  { name: "Internet", amount: 4000 },
];

export default function TransactionTable({ title }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="font-semibold mb-3">{title}</h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500 border-b">
            <th className="text-left py-2">Item</th>
            <th className="text-right py-2">Amount (KES)</th>
          </tr>
        </thead>

        <tbody>
          {mockData.map((item, index) => (
            <tr key={index} className="border-b last:border-none">
              <td className="py-2">{item.name}</td>
              <td className="py-2 text-right">
                {item.amount.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="mt-3 text-sm text-green-600 hover:underline">
        + Add item
      </button>
    </div>
  );
}
