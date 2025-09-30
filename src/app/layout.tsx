"use client";
import type { Metadata } from "next";
import { useRouter } from 'next/navigation';
import "./globals.css";

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <html lang="en">
      <body className="bg-[var(--reco-green-100)] text-black">
        <header className="bg-[var(--reco-green-0)] text-white p-6 flex items-center">
          <a href="/dashboard" className="inline-block mr-4">
            <img src="../assets/Logo.png" alt="Recooty Logo" className="h-8" />
          </a>
          <h1 className="text-2xl">Infinity & Beyond</h1>

          <button
            className="bg-[var(--reco-green-30)] hover:bg-[var(--reco-green-70)] text-white px-4 py-2 rounded cursor-pointer justify-between ml-auto"
            onClick={() => router.push('/post_job')}
          >
            Post New Job
          </button>
        </header>
        {children}
      </body>
    </html>
  );
}
