import React from "react";

export default function SavingsGoals() {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="font-semibold mb-4">Saving Goals</h3>

      <div className="space-y-4">
        {[
          { name: "Emergency Fund", progress: 60 },
          { name: "Vacation", progress: 30 },
        ].map((goal) => (
          <div key={goal.name}>
            <p className="text-sm mb-1">{goal.name}</p>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${goal.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
