import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, FolderTree } from "lucide-react";

export default function CategoriesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Quản lý danh mục khóa học</h1>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4" />
          Thêm danh mục
        </Button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Tìm kiếm danh mục..." className="pl-10" />
        </div>
      </div>

      {/* Categories Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Tên danh mục</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Slug</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Số khóa học</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
              <th className="text-right px-6 py-3 text-xs font-medium text-gray-500 uppercase">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                Chưa có dữ liệu
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
