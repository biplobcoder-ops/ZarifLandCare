"use client";

import { useState } from "react";
import { Eye } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import DataTable, { Column } from "@/components/ui/DataTable";
import Pagination from "@/components/ui/Pagination";
import type { Deed } from "@/types/deed";

// ============================================
// DUMMY DATA — Approved Deeds
// ============================================
const dummyDeeds: Deed[] = [
  {
    id: 1,
    serial_no: 675,
    deed_no: "204",
    deed_date: "2026-11-08",
    donor_name: "সালমা বেগম",
    recipient_name: "মোঃ আক্তার গোলদার",
    mouza_name: "—",
    deed_type: "সাফ কবলা",
    amount: 600000,
    submitted_by: 7,
    submitted_by_name: "zahidul islam",
    submitted_by_email: "shakjahid484@gmail.com",
    status: "approved",
    created_at: "2026-02-20T08:10:00Z",
    updated_at: "2026-02-20T08:10:00Z",
  },
  {
    id: 2,
    serial_no: 679,
    deed_no: "225",
    deed_date: "2026-11-08",
    donor_name: "মোঃ মিলেনুর রহমান",
    recipient_name: "মাহফুজ আহাম্মদ",
    mouza_name: "পাঁচগাও",
    deed_type: "সাফ কবলা",
    amount: 725000,
    submitted_by: 7,
    submitted_by_name: "zahidul islam",
    submitted_by_email: "shakjahid484@gmail.com",
    status: "approved",
    created_at: "2026-02-20T08:10:00Z",
    updated_at: "2026-02-20T08:10:00Z",
  },
  {
    id: 3,
    serial_no: 784,
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
    status: "approved",
    created_at: "2026-08-15T06:54:00Z",
    updated_at: "2026-08-15T06:54:00Z",
  },
  {
    id: 4,
    serial_no: 785,
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
    status: "approved",
    created_at: "2026-08-15T06:55:00Z",
    updated_at: "2026-08-15T06:55:00Z",
  },
  {
    id: 5,
    serial_no: 775,
    deed_no: "2958",
    deed_date: "2026-07-28",
    donor_name: "উজ্জল",
    recipient_name: "আওলাদ মৃধা",
    mouza_name: "—",
    deed_type: "কবলা",
    amount: 470000,
    submitted_by: 7,
    submitted_by_name: "zahidul islam",
    submitted_by_email: "shakjahid484@gmail.com",
    status: "approved",
    created_at: "2026-08-15T06:55:00Z",
    updated_at: "2026-08-15T06:55:00Z",
  },
  {
    id: 6,
    serial_no: 782,
    deed_no: "3109",
    deed_date: "2026-07-28",
    donor_name: "মোঃ খাকেনুর",
    recipient_name: "মোঃ রুবেল",
    mouza_name: "পাঁচগাও",
    deed_type: "কবলা",
    amount: 800000,
    submitted_by: 7,
    submitted_by_name: "zahidul islam",
    submitted_by_email: "shakjahid484@gmail.com",
    status: "approved",
    created_at: "2026-08-15T06:55:00Z",
    updated_at: "2026-08-15T06:55:00Z",
  },
  {
    id: 7,
    serial_no: 783,
    deed_no: "3126",
    deed_date: "2026-07-28",
    donor_name: "শাহজালাল",
    recipient_name: "শিল্পী আক্তার",
    mouza_name: "পাঁচগাও",
    deed_type: "পাওয়ার",
    amount: 0,
    submitted_by: 7,
    submitted_by_name: "zahidul islam",
    submitted_by_email: "shakjahid484@gmail.com",
    status: "approved",
    created_at: "2026-08-15T06:55:00Z",
    updated_at: "2026-08-15T06:55:00Z",
  },
  {
    id: 8,
    serial_no: 780,
    deed_no: "3074",
    deed_date: "2026-07-26",
    donor_name: "হারুন রশীদ",
    recipient_name: "মোঃ মাজারুল ইসলাম",
    mouza_name: "—",
    deed_type: "হেবার ঘোষনা",
    amount: 2500000,
    submitted_by: 7,
    submitted_by_name: "zahidul islam",
    submitted_by_email: "shakjahid484@gmail.com",
    status: "approved",
    created_at: "2026-08-15T06:55:00Z",
    updated_at: "2026-08-15T06:55:00Z",
  },
  {
    id: 9,
    serial_no: 781,
    deed_no: "3098",
    deed_date: "2026-07-26",
    donor_name: "মোঃ জাহাঙ্গীর আলম মাতাব্বর",
    recipient_name: "মোঃ সুজন",
    mouza_name: "—",
    deed_type: "কবলা",
    amount: 780000,
    submitted_by: 7,
    submitted_by_name: "zahidul islam",
    submitted_by_email: "shakjahid484@gmail.com",
    status: "approved",
    created_at: "2026-08-15T06:55:00Z",
    updated_at: "2026-08-15T06:55:00Z",
  },
  {
    id: 10,
    serial_no: 772,
    deed_no: "2938",
    deed_date: "2026-07-19",
    donor_name: "মোঃ মাসুম শেখ",
    recipient_name: "মোঃ আমিনুর রহমান",
    mouza_name: "—",
    deed_type: "কবলা",
    amount: 375000,
    submitted_by: 7,
    submitted_by_name: "zahidul islam",
    submitted_by_email: "shakjahid484@gmail.com",
    status: "approved",
    created_at: "2026-07-19T10:00:00Z",
    updated_at: "2026-07-19T10:00:00Z",
  },
  {
    id: 11,
    serial_no: 773,
    deed_no: "2939",
    deed_date: "2026-07-19",
    donor_name: "মরিয়ম",
    recipient_name: "হাওয়া বেগম",
    mouza_name: "—",
    deed_type: "কবলা",
    amount: 60000,
    submitted_by: 7,
    submitted_by_name: "zahidul islam",
    submitted_by_email: "shakjahid484@gmail.com",
    status: "approved",
    created_at: "2026-07-19T10:00:00Z",
    updated_at: "2026-07-19T10:00:00Z",
  },
  {
    id: 12,
    serial_no: 764,
    deed_no: "2811",
    deed_date: "2026-07-12",
    donor_name: "রকিব",
    recipient_name: "মোঃ জান্নাতুল নাঈম",
    mouza_name: "পাঁচগাও",
    deed_type: "কবলা",
    amount: 200000,
    submitted_by: 7,
    submitted_by_name: "zahidul islam",
    submitted_by_email: "shakjahid484@gmail.com",
    status: "approved",
    created_at: "2026-07-12T10:00:00Z",
    updated_at: "2026-07-12T10:00:00Z",
  },
];

export default function ApprovedDeedsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;

  const filteredDeeds = dummyDeeds.filter(
    (d) =>
      d.deed_no.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.donor_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.recipient_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDeeds.length / itemsPerPage);
  const paginatedDeeds = filteredDeeds.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleView = (id: number) => {
    console.log("View deed:", id);
    alert(`দলিল ID: ${id} — বিস্তারিত দেখতে হবে (পরে Supabase connect)`);
  };

  const columns: Column<Deed>[] = [
    {
      key: "sl",
      label: "ক্রম",
      render: (_, idx) => (
        <span className="text-text-secondary text-sm">
          {(currentPage - 1) * itemsPerPage + idx + 1}
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
      render: () => <span className="zarif-badge-approved">অনুমোদিত</span>,
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
        subtitle={`মোট ${dummyDeeds.length} টি অনুমোদিত দলিল`}
      />

      {/* Search */}
      <div className="mb-4 flex justify-end">
        <input
          type="text"
          placeholder="দলিল নং, দাতা বা গ্রহীতা খুঁজুন..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="zarif-input max-w-sm"
        />
      </div>

      <DataTable
        columns={columns}
        data={paginatedDeeds}
        emptyMessage="কোন অনুমোদিত দলিল পাওয়া যায়নি"
        keyExtractor={(item) => item.id}
      />

      {filteredDeeds.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
