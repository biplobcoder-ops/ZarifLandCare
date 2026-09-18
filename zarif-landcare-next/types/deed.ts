export interface Deed {
  id: number;
  serial_no: number;
  deed_no: string;
  deed_date: string;
  donor_name: string;
  donor_father_name?: string;
  recipient_name: string;
  recipient_father_name?: string;
  mouza_name: string;
  deed_type: string;
  amount: number;
  mobile_no?: string;
  remarks?: string;
  pdf_file?: string;
  submitted_by: number;
  submitted_by_name?: string;
  submitted_by_email?: string;
  status: "pending" | "approved" | "rejected";
  approved_by?: number;
  approved_at?: string;
  created_at: string;
  updated_at: string;
}
