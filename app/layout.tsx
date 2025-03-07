import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


// Configure each font
const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: "Evently",
  description: "An efficient event platform",
  icons: {
    icon: './favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={poppins.variable}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
