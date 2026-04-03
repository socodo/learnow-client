import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function RefundsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Xử lý yêu cầu hoàn tiền</h1>
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Tìm kiếm theo mã đơn, email..." className="pl-10" />
          </div>
          <select className="border rounded-md px-3 py-2 text-sm text-gray-700">
            <option value="">Tất cả trạng thái</option>
            <option value="pending">Chờ xử lý</option>
            <option value="approved">Đã duyệt</option>
            <option value="rejected">Từ chối</option>
          </select>
        </div>
      </div>

      {/* Refunds Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Mã đơn</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Học viên</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Khóa học</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Số tiền</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Lý do</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
              <th className="text-right px-6 py-3 text-xs font-medium text-gray-500 uppercase">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7} className="px-6 py-12 text-center text-gray-400">
                Chưa có dữ liệu
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
