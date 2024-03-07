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
      "Cool Cut Barbershop - ร้านตัดผมชายที่ดีที่สุดในกรุงเทพ | ตัดผม & ออกแบบทรงผม",
  },
  description:
    "ค้นพบประสบการณ์การตัดผมที่ดีที่สุดกับ Cool Cut Barbershop บริการตัดผม, โกนหนวด, และออกแบบทรงผมให้เข้ากับใบหน้าของคุณโดยเฉพาะ.",
  keywords: [
    "ตัดผมชาย",
    "ร้านตัดผมชายใกล้ฉัน",
    "ร้านตัดผม",
    "ดูแลเส้นผม",
    "โกนหนวด",
    "แต่งทรงผม",
    "ร้านตัดผมจรัญ",
    "ร้านตัดผมชาย กรุงเทพ",
    "ตัดผมชาย กรุงเทพ",
    "ตัดผมทรงเฟด กรุงเทพ",
    "ตกแต่งหนวดเครา กรุงเทพ",
    "บริการดูแลผู้ชาย กรุงเทพ",
    "ร้านตัดผมแบบโมเดิร์น กรุงเทพ",
    "ตัดผมทรงเฟด กรุงเทพ ใกล้ฉัน",
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
  icons: {
    icon: [
      {
        url: "/coolcut-barbershop.ico",
      },
    ],
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className="bg-custom sm:flex sm:flex-col sm:min-h-screen">
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
