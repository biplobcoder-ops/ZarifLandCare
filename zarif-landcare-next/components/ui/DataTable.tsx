"use client";

import { motion } from "framer-motion";

export interface Column<T> {
  key: string;
  label: string;
  render?: (item: T, index: number) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
  keyExtractor: (item: T, index: number) => string | number;
}

export default function DataTable<T>({
  columns,
  data,
  emptyMessage = "কোন তথ্য পাওয়া যায়নি",
  keyExtractor,
}: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-card border border-border bg-white">
      <table className="zarif-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} className={col.className}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="zarif-no-data">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((item, idx) => (
              <motion.tr
                key={keyExtractor(item, idx)}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.02 }}
              >
                {columns.map((col) => (
                  <td key={col.key} className={col.className}>
                    {col.render
                      ? col.render(item, idx)
                      : (item as any)[col.key]}
                  </td>
                ))}
              </motion.tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
