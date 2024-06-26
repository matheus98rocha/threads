import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import RootLayoutWrapper from "@/components/shared/root-layout/RootLayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Threads",
  description: "Meta Threads Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <RootLayoutWrapper>{children}</RootLayoutWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
