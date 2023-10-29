import localFont from "next/font/local";
import "./globals.css";

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
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={customFont.className}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
