import MainLayout from "../layouts/MainLayout";
import MonthSelector from "../components/MonthSelector";
import SummaryWidget from "../components/SummaryWidget";
import SavingsGoals from "../components/SavingsGoals";
import RecentTransactions from "../components/RecentTransactions";
import React from "react"

export default function Dashboard() {
  return (
    <MainLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Overview</h1>
        <MonthSelector />
      </div>

      {/* KPI Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <SummaryWidget title="Income" amount={85000} />
        <SummaryWidget title="Expenses" amount={62000} />
        <SummaryWidget title="Savings" amount={15000} />
        <SummaryWidget title="Left to Spend" amount={23000} highlight />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SavingsGoals />
        <RecentTransactions />
      </div>
    </MainLayout>
  );
}
