import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/layout/navbar";
import Footer from "@/src/components/layout/footer";

export const metadata: Metadata = {
  title: "Acme Walkies | Your neighborhood dog walkers",
  description:
    "Reliable, unhurried neighborhood walks for the dogs of Silver Lake. Serving our local community with personal care since 2014.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
