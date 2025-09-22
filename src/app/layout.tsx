import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from 'next/font/google'
import { QueryProviders } from "./queryProvider";
import { AuthProvider } from "@/context/AuthContext";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "RedceamClothing",
  description: "Redberry Clothing Ecommerce App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-red-100">
        <AuthProvider>
          <QueryProviders>
          <Navbar />
          {children}
          </QueryProviders>
        </AuthProvider>
      </body>
    </html>
  );
}
