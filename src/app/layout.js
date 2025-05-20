// import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
  variable: "--font-poppins",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Lens Lore",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body className={`${poppins.variable} antialiased`}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
