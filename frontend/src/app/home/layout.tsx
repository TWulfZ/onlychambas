import Sidebar from "@/components/app/sidebar";
import Widgets from "@/components/app/widgets";
import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white">
      <main className="container mx-auto flex max-w-7xl">
        <Sidebar />
        {children}
        <Widgets />
      </main>
    </div>
  );
}
