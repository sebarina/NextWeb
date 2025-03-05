import React from "react";
import Sidebar from "./layout/vertical/sidebar/Sidebar";
import Header from "./layout/vertical/header/Header";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import 'simplebar-react/dist/simplebar.min.css';
import { Flowbite, ThemeModeScript } from "flowbite-react";
import customTheme from "@/utils/theme/custom-theme";
import "./css/globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MatDash-Nextjs-Free",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <ThemeModeScript />
      </head>
      <body className={`${manrope.className}`}>
        <Flowbite theme={{ theme: customTheme }}>
          <div className="flex w-full min-h-screen">
      <div className="page-wrapper flex w-full">
        {/* Header/sidebar */}
        <Sidebar />
        <div className="body-wrapper w-full bg-white dark:bg-dark">
          <Header />
          {/* Body Content  */}
          <div className="bg-lightgray mr-3 rounded-page min-h-[90vh]">
            <div
              className={`container mx-auto  py-30`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
        </Flowbite>
      </body>
    </html>
  );
}