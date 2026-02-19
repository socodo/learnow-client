import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-17 pt-1.5">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <h1 className="font-arimo font-bold text-2xl">
              <span className="text-blue-900">LearN</span>
              <span className="text-amber-500">ow</span>
            </h1>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                className="w-full rounded-2xl border-[#D1D5DC] py-5 pl-10 focus-visible:border-[#FE9A00] focus-visible:ring-[#FE9A00]/20"
                placeholder="Type to search..."
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8 text-[#364153] font-medium">
            <Link href="explore" className="hover:text-blue-900 transition-colors">
              Explore
            </Link>
            <Link href="teaching" className="hover:text-blue-900 transition-colors">
              Tutor Now
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4 ml-8">
            <Link href="/auth/login">
              <Button
                className="text-[#1C398E] bg-white border border-[#1C398E] hover:bg-blue-50 hover:text-blue-800 transition-all px-6"
              >
                Log in
              </Button>
            </Link>

            <Button
              className="text-white bg-[#FE9A00] border border-[#FE9A00] hover:bg-orange-600 transition-all px-6"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
