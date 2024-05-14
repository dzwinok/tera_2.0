import type { Metadata } from "next";
import "./globals.css";
import HeaderNavigation from "@/components/general/headerNavigation";



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
        <HeaderNavigation/>
        {children}
      </main>
      </body>
      </html>
  );
}

