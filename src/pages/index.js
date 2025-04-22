import { Geist, Geist_Mono } from "next/font/google";
import { useAuth } from "@/store/auth";
import Header from "@/components/Header";
import Payment from '../components/payment'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [user] = useAuth();

  if (!user) {
    return (
      <div
        className={`${geistSans.variable} ${geistMono.variable} bg-[#F6F6F6] min-h-screen font-[family-name:var(--font-geist-sans)]`}
      >
        <Header />
        <main className="flex-1 flex items-center justify-center p-6">
          <div className=" bg-white border-1  rounded-[12px] mt-4  w-full max-w-lg px-8 py-16 text-center  shadow-xs border-[#E0E0E0] ">
            <p className="text-[12px] lg:text-[14px] text-center">شما به این صفحه دسترسی ندارید، ابتدا به سایت ورود کنید</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} bg-[#F6F6F6] min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <Header />
      <main >
        <Payment />
      </main>
    </div>
  );
}
