import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Provider from "@/config/Provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Fun.memeco.tv",
  description: "Fun.memeco.tv is a simple memeconomy. Upload an image, choose a fun name and symbol, and then pay a small fee. The platform uses a bond curve pricing model, where the token price rises as more people buy it, creating liquidity before listing on decentralized exchanges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-base-200`} >

        <Provider>
          <Header />
          <div className="mt-16"/>
          {children}
          <Footer/>
        </Provider>


      </body>
    </html>
  );
}
