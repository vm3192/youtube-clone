import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/ui/Header";
import Navbar from "@/ui/Navbar";
import { BurgerMenuContextProvider } from "@/lib/context/BurgerMenuContext";
import { DarkmodeContextProvider } from "@/lib/context/DarkmodeContext";

export const metadata: Metadata = {
  title: "YTClone",
  description: "Training app for refine my coding skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DarkmodeContextProvider>
        <BurgerMenuContextProvider>
          <Header />
          <Navbar />
          <main className="main">{children}</main>
        </BurgerMenuContextProvider>
      </DarkmodeContextProvider>
    </html>
  );
}
