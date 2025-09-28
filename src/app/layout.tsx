import type { Metadata } from "next";
import './globals.css';
import Navbar from "@/components/Navbar";
import { Poppins } from 'next/font/google'
import { QueryProviders } from "./queryProvider";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "RedceamClothing",
  description: "Redberry Clothing Ecommerce App",
  icons: {
    icon: "/images/icon.png",
  }
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
          <CartProvider>
          <QueryProviders>
          <Navbar />
          {children}
          </QueryProviders>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
