"use client";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const containerRef = useRef(null);

  return (
    <html lang="en">
      <body className={inter.className}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone: { smooth: true },
            tablet: { smooth: true },
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <main data-scroll-container ref={containerRef}>
            {children}
          </main>
        </LocomotiveScrollProvider>
      </body>
    </html>
  );
}
