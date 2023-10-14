import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const customFont = localFont({
  src: [
    {
      path: "../public/CabinetGrotesk-Regular.otf",
      style: "normal",
    },
    {
      path: "../public/CabinetGrotesk-Medium.otf",
      style: "bold",
    },
  ],
});

export const metadata = {
  title: "Pavan Bhaskar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={customFont.className}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
