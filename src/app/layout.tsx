import "~/styles/globals.css";
import { Roboto_Mono } from "next/font/google";
import { type Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "A personal portfolio page built with Next.js",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const RobotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang="en" className={`${RobotoMono.variable} font-roboto-mono`}>
        <body>{children}</body>
      </html>
      <Analytics />
    </>
  );
}
