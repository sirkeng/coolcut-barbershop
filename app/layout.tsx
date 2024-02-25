import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: "%s | Cool Cut Barbershop",
    default:
      "Cool Cut Barbershop - ร้านตัดผมชายที่ดีที่สุดในกรุงเทพ | ตัดผม & บริการดูแลผู้ชาย",
  },
  description:
    "ค้นพบประสบการณ์การตัดผมที่ดีที่สุดกับ Cool Cut Barbershop บริการตัดผม, โกนหนวด, และสไตลิ่งสำหรับผู้ชายยุคใหม่.",
  keywords: [
    "ร้านตัดผม",
    "ตัดผมชาย",
    "ดูแลเส้นผม",
    "โกนหนวด",
    "แต่งทรงผม",
    "ร้านตัดผมชาย กรุงเทพ",
    "ตัดผมชาย กรุงเทพ",
    "ร้านตัดผม บาร์เบอร์ กรุงเทพ",
    "ร้านตัดผม ชาย ไทย",
    "ตัดผมทรงเฟด กรุงเทพ",
    "ตกแต่งหนวดเครา กรุงเทพ",
    "บริการดูแลผู้ชาย กรุงเทพ",
    "ร้านตัดผมแบบดั้งเดิม กรุงเทพ",
    "ร้านตัดผมแบบโมเดิร์น กรุงเทพ",
    "ตัดผมทรงเฟด กรุงเทพ ใกล้ฉัน",
    "ร้านตัดผม ใกล้ฉัน",
    "ร้านตัดผมสไตล์เกาหลี กรุงเทพ",
    "ร้านตัดผมสำหรับผู้ชาย กรุงเทพ",
    "barbershop bangkok",
    "haircut bangkok",
    "men's haircut bangkok",
    "barber shop bangkok",
    "hair salon bangkok",
    "fade haircut bangkok",
    "beard trim bangkok",
    "men's grooming bangkok",
    "traditional barber bangkok",
    "modern barber bangkok",
  ],
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="th">
      <body className="bg-custom">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="container mx-auto p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
