import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import HeaderNavigation from "@/components/general/headerNavigation";
import logoPNG from "@/assets/images/logo.png"
import Image from "next/image";



export const metadata: Metadata = {
  title: "Terraconsult",
  description: "Terraconsult",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>
        <main className="flex flex-col w-full">
          <div className="w-full flex flex-row justify-between items-center bg-tera-green px-10">
            <div className="bg-white rounded-full">
              <Link href="/" className="bg-white rounded-xl" >
                <Image src={logoPNG} className="h-[80px] w-[80px]  object-contain" alt="logoTeraConsult"/>
              </Link>
            </div>
          <HeaderNavigation/>

          </div>
        {children}
        </main>
        </body>
    </html>
  );
}
