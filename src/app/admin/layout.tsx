import AdminSidebar from "@/components/layout/AdminSidebar";

export const metadata = {
  title: "Admin - LearnOw",
  description: "Quản trị hệ thống LearnOw",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 bg-gray-50 p-6">{children}</main>
    </div>
  );
}
