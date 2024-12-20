import type { Metadata } from "next";
import "./globals.css";
import GlobalLayout from "./x-layouts/home.layout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`antialiased`}>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
