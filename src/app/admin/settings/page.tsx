import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save } from "lucide-react";

export default function SettingsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Cấu hình hệ thống</h1>
      </div>

      <div className="space-y-6">
        {/* General Settings */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Cài đặt chung</h2>
          <div className="space-y-4 max-w-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tên hệ thống</label>
              <Input defaultValue="LearnOw" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email hỗ trợ</label>
              <Input type="email" placeholder="support@learnow.vn" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại hỗ trợ</label>
              <Input type="tel" placeholder="0900 000 000" />
            </div>
          </div>
        </div>

        {/* Commission Settings */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Cài đặt hoa hồng</h2>
          <div className="space-y-4 max-w-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tỷ lệ hoa hồng nền tảng (%)</label>
              <Input type="number" defaultValue="30" min={0} max={100} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Thời gian hoàn tiền tối đa (ngày)</label>
              <Input type="number" defaultValue="30" min={1} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Số tiền payout tối thiểu (VND)</label>
              <Input type="number" defaultValue="500000" min={0} />
            </div>
          </div>
        </div>

        {/* Payment Settings */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Cài đặt thanh toán</h2>
          <div className="space-y-4 max-w-lg">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium text-gray-900">VNPay</p>
                <p className="text-sm text-gray-500">Thanh toán qua VNPay</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium text-gray-900">MoMo</p>
                <p className="text-sm text-gray-500">Thanh toán qua MoMo</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
            <Save className="w-4 h-4" />
            Lưu cấu hình
          </Button>
        </div>
      </div>
    </div>
  );
}
