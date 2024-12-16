"use client";

import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  // SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  // SidebarGroupLabel,
  SidebarHeader,
  // SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";

const GlobalSidebar = () => {
  const router = useRouter();

  return (
    <Sidebar>
      {/* Logo header */}
      <SidebarHeader className="flex items-start p-4">ESAI</SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        {/* All ESAI Tools */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenuButton onClick={() => router.push("/")}>All ESAI Tools</SidebarMenuButton>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* History */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenuButton onClick={() => router.push("/history")}>History</SidebarMenuButton>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Cards */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenuButton onClick={() => router.push("/cards")}>Cards</SidebarMenuButton>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator />
      </SidebarContent>
    </Sidebar>
  );
};

export default GlobalSidebar;
