"use client";

import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import DataTable, { Column } from "@/components/ui/DataTable";
import Pagination from "@/components/ui/Pagination";
import type { Deed } from "@/types/deed";

// ============================================
// DUMMY DATA — Pending Deeds
// ============================================
const dummyDeeds: Deed[] = [
  {
    id: 1,
    serial_no: 786,
    deed_no: "3183",
    deed_date: "2026-08-01",
    donor_name: "ফরহাদ হোসেন",
    recipient_name: "জনি",
    mouza_name: "হাসাইল",
    deed_type: "হেবার ঘোষনা",
    amount: 400000,
    submitted_by: 7,
    submitted_by_name: "zahidul islam",
    submitted_by_email: "shakjahid484@gmail.com",
    status: "pending",
    created_at: "2026-09-16T10:30:00Z",
    updated_at: "2026-09-16T10:30:00Z",
  },
  {
    id: 2,
    serial_no: 787,
    deed_no: "3206",
    deed_date: "2026-08-01",
    donor_name: "ফরিদা বেগম",
    recipient_name: "জহুরা বেগম",
    mouza_name: "—",
    deed_type: "হেবার ঘোষনা",
    amount: 100000,
    submitted_by: 7,
    submitted_by_name: "zahidul islam",
    submitted_by_email: "shakjahid484@gmail.com",
    status: "pending",
    created_at: "2026-09-16T11:15:00Z",
    updated_at: "2026-09-16T11:15:00Z",
  },
  {
    id: 3,
    serial_no: 788,
    deed_no: "3210",
    deed_date: "2026-08-05",
    donor_name: "মোঃ শাহ আলম",
    recipient_name: "মোঃ আরিফ শেখ",
    mouza_name: "বাড়াইল",
    deed_type: "সাফ কবলা",
    amount: 860000,
    submitted_by: 7,
    submitted_by_name: "zahidul islam",
    submitted_by_email: "shakjahid484@gmail.com",
    status: "pending",
    created_at: "2026-09-17T09:20:00Z",
    updated_at: "2026-09-17T09:20:00Z",
  },
  {
    id: 4,
    serial_no: 789,
    deed_no: "3211",
    deed_date: "2026-08-10",
    donor_name: "মোঃ মিথুল",
    recipient_name: "সবুজ আলী",
    mouza_name: "—",
    deed_type: "সাফ কবলা",
    amount: 1300000,
    submitted_by: 7,
    submitted_by_name: "zahidul islam",
    submitted_by_email: "shakjahid484@gmail.com",
    status: "pending",
    created_at: "2026-09-17T14:45:00Z",
    updated_at: "2026-09-17T14:45:00Z",
  },
  {
    id: 5,
    serial_no: 790,
    deed_no: "3212",
    deed_date: "2026-08-15",
    donor_name: "আমেনা",
    recipient_name: "দুলাল খান",
    mouza_name: "—",
    deed_type: "সাফ কবলা",
    amount: 210000,
    submitted_by: 7,
    submitted_by_name: "zahidul islam",
    submitted_by_email: "shakjahid484@gmail.com",
    status: "pending",
    created_at: "2026-09-18T08:00:00Z",
    updated_at: "2026-09-18T08:00:00Z",
  },
];

export default function PendingDeedsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [deeds, setDeeds] = useState<Deed[]>(dummyDeeds);
  const totalPages = 1;

  const handleApprove = (id: number) => {
    if (confirm("আপনি কি এই দলিলটি অনুমোদন করতে চান?")) {
      setDeeds((prev) => prev.filter((d) => d.id !== id));
      console.log("Approved deed:", id);
    }
  };

  const handleReject = (id: number) => {
    if (confirm("আপনি কি এই দলিলটি বাতিল করতে চান?")) {
      setDeeds((prev) => prev.filter((d) => d.id !== id));
      console.log("Rejected deed:", id);
    }
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
      key: "actions",
      label: "অ্যাকশন",
      className: "w-48",
      render: (item) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleApprove(item.id)}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium hover:bg-emerald-100 transition-colors"
          >
            <CheckCircle size={14} />
            অনুমোদন
          </button>
          <button
            onClick={() => handleReject(item.id)}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-red-50 text-red-600 text-xs font-medium hover:bg-red-100 transition-colors"
          >
            <XCircle size={14} />
            বাতিল
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="অপেক্ষমাণ দলিলের তালিকা"
        subtitle="নতুন জমা দেওয়া দলিল যা এখনো অনুমোদিত হয়নি"
      />

      <DataTable
        columns={columns}
        data={deeds}
        emptyMessage="কোন অপেক্ষমাণ দলিল পাওয়া যায়নি"
        keyExtractor={(item) => item.id}
      />

      {deeds.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
