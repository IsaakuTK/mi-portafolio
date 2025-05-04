import type { Metadata } from "next";
import { rubik } from './fonts';
import { Header } from '../components';
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio Web",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${rubik.variable}`}> 
      <body className="pt-20 lg:pt-25">
        <Header/>
        {children}
      </body> 
    </html>
  );
}
