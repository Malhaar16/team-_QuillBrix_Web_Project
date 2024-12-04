import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Notification from "@/components/Notification";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Team QuillBrix Restrauent Application",
  description: "Fast Food Restrauent by Team QuillBrix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
        <Notification />
        <Navbar />
        {children}
        <Footer />
        <ToastContainer position="bottom-right" theme="dark" autoClose={3000}/>
        </AuthProvider>
      </body>
    </html>
  );
}
