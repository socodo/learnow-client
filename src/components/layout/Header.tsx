"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ChevronDown, Divide, Search } from "lucide-react";
import { useUserStore } from "@/app/stores/useUserStore";
import { toast } from "sonner";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const user = useUserStore((state) => state.user);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const setLogout = useUserStore((state) => state.setLogout);
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    setLogout();
    toast.success("Đã đăng xuất");
  };
  return (
    <header className="border-b shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-17 items-center justify-between pt-1.5">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <h1 className="font-arimo text-2xl font-bold">
              <span className="text-blue-900">LearN</span>
              <span className="text-amber-500">ow</span>
            </h1>
          </Link>

          {/* Search Bar */}
          <div className="mx-8 max-w-md flex-1">
            <div className="relative">
              <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                className="w-full rounded-2xl border-[#D1D5DC] py-5 pl-10 focus-visible:border-[#FE9A00] focus-visible:ring-[#FE9A00]/20"
                placeholder="Type to search..."
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8 font-medium text-[#364153]">
            <Link
              href="explore"
              className="transition-colors hover:text-blue-900"
            >
              Explore
            </Link>
            <Link
              href="teaching"
              className="transition-colors hover:text-blue-900"
            >
              Tutor Now
            </Link>
          </nav>

          {/* Auth Buttons */}
          {isLoggedIn && user ? (
            <div className="relative ml-8">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-full border border-transparent py-1 pr-3 pl-1 transition-colors hover:bg-gray-100 hover:shadow-sm focus:outline-none"
              >
                <Image
                  src={
                    user?.avatar ||
                    `https://ui-avatars.com/api/?name=${user?.name || "User"}&background=EBF4FF&color=1E3A8A`
                  }
                  alt="User Avatar"
                  width={38}
                  height={38}
                  className="rounded-full border border-gray-200 bg-white object-cover shadow-sm"
                  priority
                />
                <span className="hidden max-w-[150px] truncate text-sm font-semibold text-[#364153] md:block">
                  {user?.name}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isOpen && (
                <div>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsOpen(false)}
                  ></div>

                  <div className="absolute right-0 z-20 mt-2 w-48 rounded-lg border border-gray-200 bg-white py-2 shadow-xl">
                    <div className="border-bottom border-gray-100 px-4 py-2 text-xs font-bold text-gray-500 uppercase">
                      Tài khoản
                    </div>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Trang cá nhân
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Cài đặt
                    </Link>
                    <hr className="my-1 border-gray-100" />
                    <button
                      onClick={() => {
                        setLogout();
                        setIsOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                    >
                      Đăng xuất
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="ml-8 flex items-center gap-4">
              <Link href="/auth/login">
                <Button className="border border-[#1C398E] bg-white px-6 text-[#1C398E] transition-all hover:bg-blue-50 hover:text-blue-800">
                  Log in
                </Button>
              </Link>

              <Link href="/auth/signup">
                <Button className="border border-[#FE9A00] bg-[#FE9A00] px-6 text-white transition-all hover:bg-orange-600">
                  Sign up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
