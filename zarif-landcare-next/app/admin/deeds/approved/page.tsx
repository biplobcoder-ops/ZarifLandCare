"use client";

import { useState } from "react";
import { Eye } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import DataTable, { Column } from "@/components/ui/DataTable";
import Pagination from "@/components/ui/Pagination";
import type { Deed } from "@/types/deed";

// Dummy data — pore Supabase theke ashbe
const dummyDeeds: Deed[] = [];

export default function ApprovedDeedsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1;

  const handleView = (id: number) => {
    console.log("View deed:", id);
    // TODO: Navigate to detail page
  };

  const columns: Column<Deed>[] = [
    {
      key: "sl",
      label: "ক্রম",
      render: (_, idx) => (
        <span className="text-text-secondary text-sm">
          {(currentPage - 1) * 10 + idx + 1}
        </span>
      ),
      className: "w-16",
    },
    {
      key: "user",
      label: "ইউজার",
      render: (item) => (
        <div>
          <p className="font-medium text-sm">{item.submitted_by_name || "—"}</p>
          <p className="text-xs text-text-muted">
            {item.submitted_by_email || ""}
          </p>
        </div>
      ),
    },
    {
      key: "deed_no",
      label: "দলিল নং",
      render: (item) => (
        <span className="font-medium text-sm">{item.deed_no}</span>
      ),
    },
    {
      key: "serial_no",
      label: "সিরিয়াল নং",
      render: (item) => <span className="text-sm">{item.serial_no}</span>,
    },
    {
      key: "deed_date",
      label: "দলিলের তারিখ",
      render: (item) => (
        <span className="text-sm">
          {new Date(item.deed_date).toLocaleDateString("bn-BD")}
        </span>
      ),
    },
    {
      key: "donor_name",
      label: "দাতা",
      render: (item) => <span className="text-sm">{item.donor_name}</span>,
    },
    {
      key: "recipient_name",
      label: "গ্রহীতা",
      render: (item) => <span className="text-sm">{item.recipient_name}</span>,
    },
    {
      key: "amount",
      label: "পরিমাণ",
      render: (item) => (
        <span className="text-sm font-medium">
          ৳{item.amount.toLocaleString("bn-BD")}
        </span>
      ),
    },
    {
      key: "status",
      label: "স্ট্যাটাস",
      render: () => (
        <span className="zarif-badge-approved">অনুমোদিত</span>
      ),
    },
    {
      key: "created_at",
      label: "তৈরির সময়",
      render: (item) => (
        <span className="text-xs text-text-secondary">
          {new Date(item.created_at).toLocaleString("bn-BD")}
        </span>
      ),
    },
    {
      key: "actions",
      label: "অ্যাকশন",
      className: "w-32",
      render: (item) => (
        <button
          onClick={() => handleView(item.id)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-brand-50 text-brand-700 text-xs font-medium hover:bg-brand-100 transition-colors"
        >
          <Eye size={14} />
          দেখুন
        </button>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="অনুমোদিত দলিলের তালিকা"
        subtitle="সব অনুমোদিত দলিলের তালিকা"
      />

      <DataTable
        columns={columns}
        data={dummyDeeds}
        emptyMessage="কোন অনুমোদিত দলিল পাওয়া যায়নি"
        keyExtractor={(item) => item.id}
      />

      {dummyDeeds.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
