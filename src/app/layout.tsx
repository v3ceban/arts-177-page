import "@/styles/globals.css";
import { Roboto_Mono } from "next/font/google";
import { type Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "A personal portfolio page built with Next.js",
};

const RobotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <html lang="en" className={`${RobotoMono.variable} font-roboto-mono`}>
        <head>
          <link
            rel="icon"
            type="image/png"
            href="/favicon-96x96.png"
            sizes="96x96"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <meta name="apple-mobile-web-app-title" content="Portfolio" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body className="px-8 bg-neon-yellow text-blue-black">
          <div className="container mx-auto">
            <Header />
            <main className="min-h-[calc(100vh-(72px+8rem)-(72px+8rem)-40px)]">
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
        </body>
      </html>
    </>
  );
};

export default RootLayout;
