"use client";

import Link from "next/link";
import { Calendar, Search, Trophy } from "lucide-react";
import { usePathname } from "next/navigation";

export const BrokerHeader = () => {
  const pathname = usePathname();
  const tabs = [
    { id: "today", label: "Today's Focus", href: "/" },
    { id: "prospecting", label: "Prospecting", href: "/prospecting" },
    { id: "pipeline", label: "Pipeline", href: "/pipeline" },
    { id: "book", label: "Book", href: "/book" },
    { id: "intelligence", label: "Call Intelligence", href: "/intelligence" },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-semibold text-gray-900">Broker Command Center</h1>
          <div className="flex gap-2">
            {tabs.map((t) => {
              const isActive =
                (t.href === "/" && pathname === "/") ||
                (t.href.startsWith("/book") && pathname.startsWith("/book")) ||
                (t.href.startsWith("/prospecting") && pathname.startsWith("/prospecting")) ||
                (t.href.startsWith("/pipeline") && pathname.startsWith("/pipeline")) ||
                (t.href.startsWith("/intelligence") && pathname.startsWith("/intelligence"));
              return (
                <Link
                  key={t.id}
                  href={t.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {t.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-3 py-2 rounded-lg text-gray-600 hover:text-gray-900 flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            <span className="hidden sm:inline">Team Stats</span>
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900"><Calendar className="w-5 h-5" /></button>
          <button className="p-2 text-gray-600 hover:text-gray-900"><Search className="w-5 h-5" /></button>
        </div>
      </div>
    </div>
  );
};