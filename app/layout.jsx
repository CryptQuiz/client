"use client";
import { usePathname } from "next/navigation";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import PopUp from "@/components/DashboardQuizsPopUp/PopUp";
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { useSelector } from 'react-redux'

export default function RootLayout({ children }) {
  const pathName = usePathname();
  // const drawer = useSelector((state) => state.popUp.popUp)

  // Use useMediaSize to get the current size of the screen

  
  return (
    <Provider store={store}>
    <html lang="en">
     
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Lexend+Mega:wght@400;500;600;700;800&family=Public+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
      <body className="relative bg-neu-yellow" style={{
          backgroundSize: "64px 64px",
          backgroundImage:
            "linear-gradient(to right, #505050 1px, transparent 1px),linear-gradient(to bottom, #505050 1px, transparent 1px)",
            
        }}>
        <div className="bg-neu-yellow h-full lg:h-[100vh] w-[100vw] flex flex-col items-center justify-center pb-4 lg:pb-0"
        style={{
          backgroundSize: "64px 64px",
          backgroundImage:
            "linear-gradient(to right, #505050 1px, transparent 1px),linear-gradient(to bottom, #505050 1px, transparent 1px)",
            
        }}
        >
          <header className="lg:hidden flex flex-row justify-between items-center w-[90vw] h-[4vh] my-4">
          <Link href="/home"> 
            <div>
              <Image
                src="/images/ge2.png"
                alt="profile"
                width={44}
                height={48}
              />  
            </div>
            </Link>
          <Link href="/profile">
            <div>
              <Image
                className="rounded-full border border-black border-r-2 border-b-2"
                src="/images/icardi.jpg"
                alt="profile"
                width={48}
                height={48}
              />
            </div>
            </Link>
          </header>
          {pathName !== "/profile" & pathName !== "/home" & pathName !== "/" ? 
            <div className="w-[90vw] lg:w-[80vw] h-[95vh] lg:h-[80vh] bg-neu-white rounded-20 lg:rounded-40 overflow-hidden border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8">
              {children}
            </div>
           : <div>
            {children}
            </div>}
            <PopUp/>
        </div>
      </body>
    </html>
    </Provider>
  );
}