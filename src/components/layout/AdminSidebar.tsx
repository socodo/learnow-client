"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FolderTree,
  BookX,
  MessageSquareWarning,
  ReceiptText,
  Wallet,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Quản lý người dùng",
    href: "/admin/users",
    icon: Users,
  },
  {
    label: "Danh mục khóa học",
    href: "/admin/categories",
    icon: FolderTree,
  },
  {
    label: "Khóa học vi phạm",
    href: "/admin/courses",
    icon: BookX,
  },
  {
    label: "Đánh giá vi phạm",
    href: "/admin/reviews",
    icon: MessageSquareWarning,
  },
  {
    label: "Yêu cầu hoàn tiền",
    href: "/admin/refunds",
    icon: ReceiptText,
  },
  {
    label: "Payout giảng viên",
    href: "/admin/payouts",
    icon: Wallet,
  },
  {
    label: "Báo cáo doanh thu",
    href: "/admin/revenue",
    icon: BarChart3,
  },
  {
    label: "Cấu hình hệ thống",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-[#1E293B] text-white flex flex-col">
      <div className="px-6 py-5 border-b border-white/10">
        <Link href="/admin" className="text-xl font-bold text-orange-400">
          LearnOw Admin
        </Link>
      </div>

      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => {
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-3 py-4 border-t border-white/10">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          Quay về trang chủ
        </Link>
      </div>
    </aside>
  );
}
