"use client";

import { useState } from "react";
import {
  Bell,
  ChevronRight,
  MessageCircle,
  Search,
  PlusCircle,
  ArrowUp,
  User,
  FileText,
  Car,
  Plane,
  HomeIcon,
  Square,
  ChevronLeft,
  Share2,
} from "lucide-react";
import { NotificationBanner, HamburgerMenuButton, Link } from "../components";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-[393px] h-[852px] mx-auto bg-gray-50 flex flex-col overflow-auto relative shadow-lg border border-gray-200">
      {/* Status Bar */}
      <div className="bg-white px-5 py-2 flex items-center justify-between text-black">
        <div className="font-medium">16:41</div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-black"></div>
            <div className="w-1 h-1 rounded-full bg-black"></div>
            <div className="w-1 h-1 rounded-full bg-black"></div>
          </div>
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-black rounded-sm"></div>
            <div className="w-1 h-2 bg-black rounded-sm"></div>
            <div className="w-1 h-1 bg-black rounded-sm"></div>
            <div className="w-1 h-1 bg-black rounded-sm"></div>
          </div>
          <div className="rounded bg-black text-white text-xs px-1.5">53</div>
        </div>
      </div>

      <main className="flex-1 flex flex-col overflow-auto">
        {/* Title */}
        <div className="bg-white px-4 py-5 flex items-center justify-between border-b">
          <h1 className="text-xl font-bold">マイナポータル</h1>
          <HamburgerMenuButton onClick={() => setMenuOpen(!menuOpen)} />
        </div>

        {/* Warning Banner */}
        <div className="bg-[#f5e9c9] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell size={18} className="text-black" />
            <span className="text-sm">
              一部の情報が取得できない場合があります。
            </span>
          </div>
          <Share2 size={18} />
        </div>

        {/* User Profile Section */}
        <div className="p-5 flex items-center bg-white">
          <div className="mr-4">
            <div className="w-[90px] h-[90px] bg-white rounded-full flex items-center justify-center border border-gray-200 overflow-hidden">
              <div className="bg-[#071d49] w-[40px] h-[40px] rounded-full relative -top-3">
                <div className="bg-[#018099] w-full h-[50px] absolute bottom-[-15px]"></div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl mb-1 font-medium">わたし</h2>
            <Link href="#" className="text-blue-600 text-sm underline">
              自治体を設定
            </Link>
          </div>
          <div>
            <div className="relative">
              <MessageCircle
                size={24}
                className="text-blue-600 fill-blue-600"
              />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                4
              </span>
            </div>
            <div className="text-blue-600 text-xs mt-1 text-center">
              お知らせ
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div className="bg-[#f8f8f5] p-4 mb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">証明書</h3>
            <Link href="#" className="text-blue-600 text-sm">
              すべて見る
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* MyNumber Card */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm">
              <div className="flex justify-between w-full mb-3">
                <div>
                  <h4 className="font-medium text-base">マイナンバー</h4>
                  <h4 className="font-medium text-base">カード</h4>
                </div>
                <ChevronRight size={18} className="text-gray-400" />
              </div>
              <div className="w-full">
                <div className="bg-[#ffccd1] p-2 rounded w-full h-12 flex items-center">
                  <div className="bg-[#0b214e] w-6 h-8 rounded-sm flex items-center justify-center mr-2">
                    <User size={14} className="text-white" />
                  </div>
                  <div className="bg-[#c7d5f4] flex-1 h-4 rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Health Insurance */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm">
              <div className="flex justify-between w-full mb-3">
                <div>
                  <h4 className="font-medium text-base">健康保険証</h4>
                </div>
                <ChevronRight size={18} className="text-gray-400" />
              </div>
              <div className="w-full">
                <div className="bg-[#deeefe] p-2 rounded w-full h-12 flex items-center justify-between">
                  <div className="bg-gray-500 w-8 h-2"></div>
                  <div className="flex items-end gap-1">
                    <div className="bg-[#4885db] w-5 h-5 rounded flex items-center justify-center">
                      <Square size={8} className="text-white" />
                    </div>
                    <div className="bg-[#ff8ca0] w-3 h-3 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Driver's License */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm">
              <div className="flex justify-between w-full mb-3">
                <h4 className="font-medium text-base">運転免許</h4>
                <ChevronRight size={18} className="text-gray-400" />
              </div>
              <div className="w-full flex justify-center">
                <Car size={24} className="text-gray-600" />
              </div>
            </div>

            {/* Passport */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm">
              <div className="flex justify-between w-full mb-3">
                <h4 className="font-medium text-base">パスポート</h4>
                <ChevronRight size={18} className="text-gray-400" />
              </div>
              <div className="w-full flex justify-center">
                <Plane size={24} className="text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Health Section */}
        <div className="bg-[#f8f8f5] p-4 mb-20">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">健康医療</h3>
            <Link href="#" className="text-blue-600 text-sm">
              すべて見る
            </Link>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="bg-white border-t absolute bottom-0 w-full">
        <div className="flex justify-around items-center py-3">
          <div className="flex flex-col items-center text-blue-700">
            <HomeIcon size={22} className="fill-blue-700 stroke-blue-700" />
            <span className="text-xs mt-1 font-medium">ホーム</span>
          </div>
          <div className="flex flex-col items-center text-gray-600">
            <FileText size={22} />
            <span className="text-xs mt-1">やること</span>
          </div>
          <div className="flex flex-col items-center text-gray-600">
            <Search size={22} />
            <span className="text-xs mt-1">さがす</span>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="absolute bottom-20 inset-x-0 flex justify-center">
        <div className="bg-white/70 backdrop-blur-sm py-2 px-16 rounded-full flex items-center gap-6">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center">
              <PlusCircle size={22} className="text-gray-600" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center">
              <ArrowUp size={22} className="text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
