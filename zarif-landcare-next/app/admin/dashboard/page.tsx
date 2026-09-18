"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, FileText, Newspaper } from "lucide-react";

const stats = [
  {
    title: "অনুমোদিত দলিল",
    value: 566,
    icon: <FileText size={24} />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    title: "অপেক্ষমাণ দলিল",
    value: 0,
    icon: <Clock size={24} />,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    title: "অনুমোদিত খতিয়ান",
    value: 342,
    icon: <CheckCircle size={24} />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    title: "অপেক্ষমাণ খতিয়ান",
    value: 18,
    icon: <Newspaper size={24} />,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
];

// Chart data — Deed Report by Year
const yearlyData = [
  { year: "2019", value: 0 },
  { year: "2020", value: 15 },
  { year: "2021", value: 45 },
  { year: "2022", value: 80 },
  { year: "2023", value: 120 },
  { year: "2024", value: 210 },
  { year: "2025", value: 280 },
];

const maxValue = Math.max(...yearlyData.map((d) => d.value));

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold text-text-primary">
          স্বাগতম, Biplob Hasan!
        </h1>
        <p className="text-text-secondary text-sm mt-1">
          শুক্রবার, ১৮ সেপ্টেম্বর, ২০২৬
        </p>
      </motion.div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="zarif-card zarif-card-hover p-6"
          >
            <div className="flex items-start justify-between">
              <div
                className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.border} border flex items-center justify-center ${stat.color}`}
              >
                {stat.icon}
              </div>
            </div>
            <p className="text-sm text-text-secondary mt-4">{stat.title}</p>
            <p className="text-3xl font-bold text-text-primary mt-1">
              {stat.value.toLocaleString("bn-BD")}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Chart Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="zarif-card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-text-primary">
              দলিল পরিসংখ্যান
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              বছর ভিত্তিক অনুমোদিত দলিল
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-emerald-500" />
            <span className="text-xs text-text-secondary">অনুমোদিত</span>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="relative h-72">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-text-muted">
            {[350, 263, 175, 88, 0].map((v) => (
              <span key={v}>{v}</span>
            ))}
          </div>

          {/* Bars */}
          <div className="ml-12 h-full flex items-end justify-around gap-4 border-b border-l border-border pb-1">
            {yearlyData.map((d, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: `${(d.value / maxValue) * 100}%`,
                  }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="w-full max-w-[60px] bg-emerald-500 rounded-t-md relative group cursor-pointer hover:bg-emerald-600 transition-colors"
                >
                  {/* Tooltip on hover */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {d.value}
                  </span>
                  {/* Value inside bar */}
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-xs font-bold">
                    {d.value}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>

          {/* X-axis labels */}
          <div className="ml-12 flex justify-around gap-4 mt-3">
            {yearlyData.map((d, idx) => (
              <span
                key={idx}
                className="flex-1 text-center text-xs text-text-secondary"
              >
                {d.year}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
