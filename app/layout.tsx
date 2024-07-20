import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: "%s | ร้านตัดผม Cool cut barbershop",
    default:
      "Cool Cut Barbershop - ร้านตัดผมที่ดีที่สุดในกรุงเทพ | ตัดผม & ออกแบบทรงผม",
  },
  description:
    "ร้านตัดผม Cool Cut Barbershop บริการตัดผม, โกนหนวด, และออกแบบทรงผมให้เข้ากับใบหน้าของคุณโดยเฉพาะ.",
  keywords: [
    "ตัดผมชาย",
    "ร้านตัดผมชายใกล้ฉัน",
    "ร้านตัดผมใกล้ฉัน",
    "ร้านตัดผม",
    "ดูแลเส้นผม",
    "โกนหนวด",
    "แต่งทรงผม",
    "ร้านตัดผมจรัญ",
    "ร้านตัดผมชาย กรุงเทพ",
    "ตัดผมชาย กรุงเทพ",
    "ร้านตัดผมทอม",
    "ร้านตัดผมทรงเฟด",
    "ร้านตัดผม กรุงเทพ",
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
    "ร้านตัดผม คูลคัท",
    "ร้านตัดผม คูลคัท กรุงเทพ",
    "ร้านตัดผมชาย Cool cut barbershop",
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
