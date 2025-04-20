import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className="antialiased">
      <body className="font-sans">
        <div className="flex flex-col h-full relative">
          <div className="flex items-center justify-center min-h-screen w-full bg-[#F6F5F4] ">
            <div
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro JP", "SF Pro Text", "SF Pro Icons", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "メイリオ", "Meiryo", "ＭＳ Ｐゴシック", "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
              className="w-[393px] h-[852px] border border-border rounded-[48px] bg-background flex flex-col overflow-hidden"
            >
              <main className="flex items-center h-full justify-center">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
