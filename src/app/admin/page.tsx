import { Users, BookOpen, DollarSign, Star, TrendingUp, ShoppingCart } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tổng người dùng</p>
              <p className="text-2xl font-bold text-gray-900">--</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tổng khóa học</p>
              <p className="text-2xl font-bold text-gray-900">--</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Doanh thu tháng</p>
              <p className="text-2xl font-bold text-gray-900">--</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Đơn hàng tháng</p>
              <p className="text-2xl font-bold text-gray-900">--</p>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-900">Biểu đồ doanh thu</h2>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-400 border-2 border-dashed rounded-lg">
            Chưa có dữ liệu
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-900">Hoạt động gần đây</h2>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-400 border-2 border-dashed rounded-lg">
            Chưa có dữ liệu
          </div>
        </div>
      </div>
    </div>
  );
}
