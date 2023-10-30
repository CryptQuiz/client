"use client";
import { usePathname } from "next/navigation";
import "./globals.css";
import Image from "next/image";
import Sponsor from "@/components/sponsor";

// export const metadata = {
//   title: 'CryptQuiz',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <body className="bg-neu-yellow ">
        <div  className="bg-neu-yellow h-[100vh] w-[100vw] flex items-center justify-center ">
            <div className="w-[80vw] mdh:h-[80vh] h-[85vh] bg-neu-white rounded-40 overflow-hidden border border-black border-r-8 border-b-8">
   
                {children}
                
          </div>
          </div>
      </body>
    </html>
  );
}
