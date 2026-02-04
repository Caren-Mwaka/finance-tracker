import MainLayout from "../layouts/MainLayout";
import MonthSelector from "../components/MonthSelector";
import SummaryCard from "../components/SummaryCard";
import TransactionTable from "../components/TransactionTable";
import React from "react"

export default function Dashboard() {
  return (
    <MainLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Monthly Budget</h1>
        <MonthSelector />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <SummaryCard title="Income" amount={85000} />
        <SummaryCard title="Expenses" amount={62000} />
        <SummaryCard title="Savings" amount={15000} />
        <SummaryCard title="Left to Spend" amount={23000} highlight />
      </div>

      {/* Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TransactionTable title="Bills" />
        <TransactionTable title="Variable Expenses" />
        <TransactionTable title="Savings & Investments" />
        <TransactionTable title="Subscriptions" />
      </div>
    </MainLayout>
  );
}
