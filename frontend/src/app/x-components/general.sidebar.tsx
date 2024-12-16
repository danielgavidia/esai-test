import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  // SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const GlobalSidebar = () => {
  return (
    <Sidebar>
      {/* Logo header */}
      <SidebarHeader className="flex items-start p-4">ESAI</SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenuButton>All ESAI Tools</SidebarMenuButton>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenuButton>History</SidebarMenuButton>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator />
      </SidebarContent>
    </Sidebar>
  );
};

export default GlobalSidebar;
