export default function RevenuePage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Báo cáo doanh thu</h1>
        <div className="flex gap-3">
          <select className="border rounded-md px-3 py-2 text-sm text-gray-700">
            <option value="month">Theo tháng</option>
            <option value="quarter">Theo quý</option>
            <option value="year">Theo năm</option>
          </select>
          <input
            type="month"
            className="border rounded-md px-3 py-2 text-sm text-gray-700"
            defaultValue="2026-03"
          />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <p className="text-sm text-gray-500 mb-1">Tổng doanh thu</p>
          <p className="text-2xl font-bold text-gray-900">--</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <p className="text-sm text-gray-500 mb-1">Số đơn hàng</p>
          <p className="text-2xl font-bold text-gray-900">--</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <p className="text-sm text-gray-500 mb-1">Hoàn tiền</p>
          <p className="text-2xl font-bold text-gray-900">--</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <p className="text-sm text-gray-500 mb-1">Doanh thu ròng</p>
          <p className="text-2xl font-bold text-gray-900">--</p>
        </div>
      </div>

      {/* Chart placeholder */}
      <div className="bg-white rounded-xl shadow-sm p-6 border mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Biểu đồ doanh thu</h2>
        <div className="h-80 flex items-center justify-center text-gray-400 border-2 border-dashed rounded-lg">
          Chưa có dữ liệu
        </div>
      </div>

      {/* Top courses */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Khóa học bán chạy nhất</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">#</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Khóa học</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Giảng viên</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Số lượt mua</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Doanh thu</th>
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
