import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, MoreHorizontal } from "lucide-react";

export default function UsersPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Quản lý người dùng</h1>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <UserPlus className="w-4 h-4" />
          Thêm người dùng
        </Button>
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Tìm kiếm theo tên, email..." className="pl-10" />
          </div>
          <select className="border rounded-md px-3 py-2 text-sm text-gray-700">
            <option value="">Tất cả vai trò</option>
            <option value="learner">Học viên</option>
            <option value="instructor">Giảng viên</option>
            <option value="reviewer">Thẩm định viên</option>
            <option value="admin">Quản trị viên</option>
          </select>
          <select className="border rounded-md px-3 py-2 text-sm text-gray-700">
            <option value="">Tất cả trạng thái</option>
            <option value="active">Hoạt động</option>
            <option value="locked">Đã khóa</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Người dùng</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Vai trò</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Ngày tạo</th>
              <th className="text-right px-6 py-3 text-xs font-medium text-gray-500 uppercase">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                Chưa có dữ liệu
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
