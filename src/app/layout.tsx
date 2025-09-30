import type { Metadata } from "next";
import "./globals.css";

import { ReactNode } from "react";
import Header from "./Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--reco-green-100)] text-black">
        <Header />
        {children}
      </body>
    </html>
  );
}
