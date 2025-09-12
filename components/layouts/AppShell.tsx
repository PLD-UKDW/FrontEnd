"use client";

import {NavigationMenuDemo} from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <NavigationMenuDemo />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
