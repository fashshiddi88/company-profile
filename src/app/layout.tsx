import type { Metadata } from "next";
import { Poppins, Playfair } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/atomics/navbar.module";
import Footer from "@/components/atomics/footer.module";
import Head from "next/head";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "700", "800"],
});

const playfair = Playfair({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "ArchiHub | Architecture and Design Interior Consultant",
  description: "Your Home Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${poppins.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
