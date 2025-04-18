import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../app/globals.css";
import CustomLayoutProvider from "./components/CustomLayoutProvider";

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

const title = "Pavan Bhaskar - Developer & Designer";
const description =
  "Portfolio website of developer & designer Pavan Bhaskar. With passion towards development & design enables me to create create super projects.";

export const metadata = {
  title,
  description,
  metadataBase: new URL("https://pavanbhaskar.vercel.app"),
  keywords: [
    "pavan",
    "bhaskar",
    "creative developer",
    "designer",
    "pavanbhaskar",
  ],
  openGraph: {
    title: title,
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
    description,
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  colorScheme: "light",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={customFont.className}>
      <head>
        <meta name="fast2sms" content="r9ySi9UslM70CFXugPveOlxDvp4ZbwHf"></meta>
      </head>
      <body suppressHydrationWarning={true}>
        <CustomLayoutProvider>{children}</CustomLayoutProvider>
        <SpeedInsights />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1480604898961464"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
