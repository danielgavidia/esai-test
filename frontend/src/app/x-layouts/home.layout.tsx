"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import GlobalSidebar from "../x-components/home.sidebar";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="h-full w-full flex">
        <GlobalSidebar />
        <main className="flex-1 p-4 overflow-y-auto">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default GlobalLayout;
