import Image from "next/image";

export default function ShopFront() {
  return (
    <div className="relative mx-auto mb-6 text-center mt-6">
      <Image
        src="/coolcut-barbershop-front.jpg" // เปลี่ยน path ให้ตรงกับตำแหน่งของรูปภาพ
        alt="Cool Cut Barbershop - หน้าร้าน"
        width={1024} // ขนาดรูปภาพ
        height={768} // ขนาดรูปภาพ
        className="mx-auto rounded-lg shadow-lg"
      />
      <div className="mt-6 p-6 bg-white rounded-lg shadow-lg text-left">
        <p className="mb-4 text-gray-700">
          <strong>ร้านตัดผม Cool cut barbershop</strong>{" "}
          ตั้งอยู่ใกล้กับวิทยาลัยเทคโนโลยีสยาม บนถนนจรัญสนิทวงศ์ เพียง 400
          เมตรจากสถานีรถไฟฟ้า MRT จรัญฯ 13 (ทางออก 4)
          เราให้บริการตัดผมสุภาพบุรุษสไตล์
          <strong> Vintage</strong>, <strong>ทรงแฟชั่น</strong>,{" "}
          <strong>โกนหนวด</strong> และ <strong>สระผม</strong> โดยทีมงานมืออาชีพ
          บรรยากาศร้านสะอาดและเป็นกันเอง เปิดบริการทุกวันตั้งแต่เวลา{" "}
          <strong>11.00 น. ถึง 21.00 น.</strong>
        </p>

        <h3 className="text-xl font-semibold mb-3 text-emerald-600">
          ทำไมต้องเลือกเรา?
        </h3>
        <ul className="list-disc list-inside space-y-2 pl-4 mb-4 text-gray-700">
          <li>บริการโดยช่างตัดผมมืออาชีพ</li>
          <li>บรรยากาศร้านสะอาด และเป็นมิตร</li>
          <li>ตั้งอยู่ใกล้สถานีรถไฟฟ้า สะดวกต่อการเดินทาง</li>
          <li>มีที่จอดรถสะดวกสำหรับผู้ที่เดินทางด้วยรถยนต์</li>
        </ul>
      </div>
    </div>
  );
}
