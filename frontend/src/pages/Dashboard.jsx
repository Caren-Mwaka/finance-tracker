import MonthSelector from "../components/MonthSelector";
import SummaryCard from "../components/SummaryCard";
import TransactionTable from "../components/TransactionTable";
import Navbar from "../components/Navbar";
import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Navbar */}
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Monthly Budget</h1>
          <MonthSelector />
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <SummaryCard title="Income" amount={85000} />
          <SummaryCard title="Expenses" amount={62000} />
          <SummaryCard title="Left to Spend" amount={23000} highlight />
        </div>

        {/* Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TransactionTable title="Bills" />
          <TransactionTable title="Variable Expenses" />
          <TransactionTable title="Savings & Investments" />
          <TransactionTable title="Subscriptions" />
        </div>
      </div>
    </div>
  );
}
