import Link from "next/link";
import { ArrowRight, FileText, Newspaper, Users, Ticket } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-brand-500 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌿</span>
            <h1 className="text-xl font-bold text-white">
              জারিফ ল্যান্ডকেয়ার সেন্টার
            </h1>
          </div>
          <Link
            href="/admin/dashboard"
            className="bg-white text-brand-600 px-4 py-2 rounded-button text-sm font-medium hover:bg-gray-100 transition-all"
          >
            অ্যাডমিন প্যানেল →
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
          🌿 জারিফ ল্যান্ডকেয়ার সেন্টার
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
          নির্ভুল দলিল প্রস্তুত এবং রেজিস্ট্রেশনের পূর্ণ সহায়তার জন্য একটি
          নির্ভরযোগ্য প্রতিষ্ঠান
        </p>
        <Link
          href="/admin/dashboard"
          className="zarif-btn-primary inline-flex items-center gap-2"
        >
          অ্যাডমিন প্যানেলে যান
          <ArrowRight size={18} />
        </Link>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/admin/deeds/pending"
            className="zarif-card zarif-card-hover p-6 text-center"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-brand-100 flex items-center justify-center mb-4">
              <FileText className="text-brand-600" size={24} />
            </div>
            <h3 className="font-bold text-text-primary mb-2">দলিল ম্যানেজমেন্ট</h3>
            <p className="text-sm text-text-secondary">অপেক্ষমাণ ও অনুমোদিত দলিল</p>
          </Link>

          <Link
            href="/admin/khatian/pending"
            className="zarif-card zarif-card-hover p-6 text-center"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Newspaper className="text-blue-600" size={24} />
            </div>
            <h3 className="font-bold text-text-primary mb-2">খতিয়ান</h3>
            <p className="text-sm text-text-secondary">খতিয়ান ব্যবস্থাপনা</p>
          </Link>

          <Link
            href="/admin/users"
            className="zarif-card zarif-card-hover p-6 text-center"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <Users className="text-orange-600" size={24} />
            </div>
            <h3 className="font-bold text-text-primary mb-2">ইউজার</h3>
            <p className="text-sm text-text-secondary">সব ইউজার ব্যবস্থাপনা</p>
          </Link>

          <Link
            href="/admin/tickets/pending"
            className="zarif-card zarif-card-hover p-6 text-center"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <Ticket className="text-purple-600" size={24} />
            </div>
            <h3 className="font-bold text-text-primary mb-2">সাপোর্ট টিকেট</h3>
            <p className="text-sm text-text-secondary">টিকেট ব্যবস্থাপনা</p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-900 text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">© 2026 জারিফ ল্যান্ডকেয়ার সেন্টার। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </footer>
    </div>
  );
}
