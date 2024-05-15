import type { Metadata } from "next";
import "./globals.css";
import HeaderNavigation from "@/components/general/headerNavigation";
import Footer from "@/components/general/footer"



export const metadata: Metadata = {
  title: "Teraconsult",
  description: "Teraconsult",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={""}>
      <main className="flex flex-col w-full pt-[100px]">
        <HeaderNavigation/>
        {children}
        <Footer/>
      </main>
      </body>
      </html>
  );
}

