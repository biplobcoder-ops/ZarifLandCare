"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Key, LogOut, ChevronDown } from "lucide-react";

export default function Topbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-20 h-16 bg-white border-b border-border flex items-center justify-between px-6 shadow-sm">
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
          />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-11 pr-4 py-2.5 rounded-input bg-gray-50 border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all"
          />
        </div>
      </div>

      {/* Right Side — User Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-3 pl-3 pr-2 py-2 rounded-lg hover:bg-gray-50 transition-all"
        >
          <div className="w-9 h-9 rounded-full bg-brand-500 flex items-center justify-center">
            <span className="text-white text-sm font-bold">B</span>
          </div>
          <span className="hidden md:block text-sm font-medium text-text-primary">
            admin
          </span>
          <motion.span
            animate={{ rotate: dropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={16} className="text-text-muted" />
          </motion.span>
        </button>

        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-14 w-52 bg-white rounded-xl shadow-lg border border-border overflow-hidden"
            >
              <button
                onClick={() => {
                  router.push("/admin/profile");
                  setDropdownOpen(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-3 text-sm text-text-primary hover:bg-gray-50 transition-colors"
              >
                <User size={18} className="text-text-secondary" />
                <span>Profile</span>
              </button>
              <button
                onClick={() => {
                  router.push("/admin/password");
                  setDropdownOpen(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-3 text-sm text-text-primary hover:bg-gray-50 transition-colors"
              >
                <Key size={18} className="text-text-secondary" />
                <span>Password</span>
              </button>
              <div className="h-px bg-border" />
              <button
                onClick={() => {
                  router.push("/admin/logout");
                  setDropdownOpen(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
