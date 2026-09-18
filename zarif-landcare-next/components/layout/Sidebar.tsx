
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  Newspaper,
  Users,
  Ticket,
  ChevronDown,
  ChevronRight,
  Settings,
  Search,
  LogOut,
  Menu,
  X,
} from "lucide-react";

// ============================================
// Menu Configuration
// ============================================
type MenuItem = {
  title: string;
  href?: string;
  icon: React.ReactNode;
  children?: { title: string; href: string }[];
};

const menuItems: MenuItem[] = [
  {
    title: "ড্যাশবোর্ড",
    href: "/admin/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    title: "দলিল",
    icon: <FileText size={20} />,
    children: [
      { title: "অপেক্ষমাণ দলিল", href: "/admin/deeds/pending" },
      { title: "অনুমোদিত দলিল", href: "/admin/deeds/approved" },
    ],
  },
  {
    title: "খতিয়ান",
    icon: <Newspaper size={20} />,
    children: [
      { title: "অপেক্ষমাণ খতিয়ান", href: "/admin/khatian/pending" },
      { title: "অনুমোদিত খতিয়ান", href: "/admin/khatian/approved" },
    ],
  },
  {
    title: "ইউজার",
    href: "/admin/users",
    icon: <Users size={20} />,
  },
  {
    title: "সাপোর্ট টিকেট",
    icon: <Ticket size={20} />,
    children: [
      { title: "অপেক্ষমাণ টিকেট", href: "/admin/tickets/pending" },
      { title: "ক্লোজড টিকেট", href: "/admin/tickets/closed" },
      { title: "উত্তর দেওয়া টিকেট", href: "/admin/tickets/answered" },
      { title: "সব টিকেট", href: "/admin/tickets/all" },
    ],
  },
  {
    title: "সেটিংস",
    icon: <Settings size={20} />,
    children: [
      { title: "ম্যানেজ পেজ", href: "/admin/settings/pages" },
      { title: "ম্যানেজ সেকশন", href: "/admin/settings/sections" },
      { title: "SEO ম্যানেজার", href: "/admin/settings/seo" },
      { title: "লোগো ও ফ্যাভিকন", href: "/admin/settings/logo" },
    ],
  },
];

// ============================================
// Sidebar Component
// ============================================
export default function Sidebar() {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<string[]>(["দলিল", "খতিয়ান", "সাপোর্ট টিকেট"]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const isActive = (href: string) => pathname === href;
  const isChildActive = (children?: { href: string }[]) =>
    children?.some((c) => pathname === c.href);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-sidebar-bg text-white rounded-lg shadow-lg"
      >
        <Menu size={20} />
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`
          fixed lg:sticky top-0 left-0 z-50 lg:z-30
          w-[260px] h-screen
          bg-gradient-to-b from-sidebar-bg via-sidebar-bgDark to-sidebar-bg
          flex flex-col
          shadow-sidebar
          transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo Section */}
        <div className="p-5 border-b border-sidebar-border">
          <div className="flex items-center justify-between">
            <Link href="/admin/dashboard" className="flex items-center gap-3">
              <span className="text-2xl">🌿</span>
              <div>
                <h1 className="text-lg font-bold text-white leading-tight">
                  ZARIF
                </h1>
                <p className="text-[10px] text-sidebar-textMuted tracking-wider">
                  LANDCARE CENTER
                </p>
              </div>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="lg:hidden text-white p-1"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Profile Card */}
        <div className="p-4">
          <div className="rounded-xl border border-dashed border-sidebar-border p-4 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-brand-500 flex items-center justify-center mb-2">
              <span className="text-white text-xl font-bold">B</span>
            </div>
            <h3 className="text-white text-sm font-semibold">Biplob Hasan</h3>
            <p className="text-sidebar-textMuted text-xs mt-0.5">Biplob Hasan</p>
            <p className="text-sidebar-textMuted text-[10px] mt-2 truncate">
              ✉ biplobhasan@demo.local
            </p>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto sidebar-scroll px-3 pb-4">
          <ul className="space-y-1">
            {menuItems.map((item, idx) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = openMenus.includes(item.title);
              const active = item.href ? isActive(item.href) : isChildActive(item.children);

              return (
                <li key={idx}>
                  {hasChildren ? (
                    <>
                      <button
                        onClick={() => toggleMenu(item.title)}
                        className={`
                          w-full flex items-center justify-between gap-3
                          px-4 py-3 rounded-lg
                          text-sm font-medium
                          transition-all duration-200
                          ${
                            active
                              ? "bg-sidebar-activeBg text-white"
                              : "text-sidebar-text hover:bg-sidebar-hover hover:text-white"
                          }
                        `}
                      >
                        <span className="flex items-center gap-3">
                          {item.icon}
                          <span>{item.title}</span>
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight size={16} />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden ml-3 mt-1 space-y-1 border-l border-sidebar-border pl-3"
                          >
                            {item.children!.map((child, cIdx) => (
                              <li key={cIdx}>
                                <Link
                                  href={child.href}
                                  className={`
                                    block px-3 py-2 rounded-md text-xs font-medium
                                    transition-all duration-200
                                    ${
                                      isActive(child.href)
                                        ? "bg-brand-500 text-white"
                                        : "text-sidebar-textMuted hover:bg-sidebar-hover hover:text-white"
                                    }
                                  `}
                                >
                                  {child.title}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className={`
                        flex items-center gap-3
                        px-4 py-3 rounded-lg
                        text-sm font-medium
                        transition-all duration-200
                        ${
                          active
                            ? "bg-brand-500 text-white shadow-md"
                            : "text-sidebar-text hover:bg-sidebar-hover hover:text-white"
                        }
                      `}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-sidebar-border">
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg w-full text-sm font-medium text-red-300 hover:bg-red-500/10 hover:text-red-200 transition-all duration-200">
            <LogOut size={20} />
            <span>লগআউট</span>
          </button>
        </div>

        {/* Footer */}
        <div className="p-3 text-center border-t border-sidebar-border">
          <p className="text-[10px] text-sidebar-textMuted">
            © 2026 Zarif Land Care
          </p>
        </div>
      </motion.aside>
    </>
  );
}
