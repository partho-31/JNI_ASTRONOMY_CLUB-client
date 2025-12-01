import { Users, Home, UserRoundPen , Newspaper, Layers2, Bell } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: UserRoundPen,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "Magazines",
    url: "/admin/magazines",
    icon: Newspaper,
  },
  {
    title: "Articles",
    url: "/admin/articles",
    icon: Layers2,
  },
  {
    title: "Notification",
    url: "#",
    icon: Bell,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="m-6 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  JNAIC_JUST
                </span>
              </div>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
             {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="px-3 py-5 hover:bg-cyan-600 rounded-lg text-white font-medium transition-colors" asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {/* User Profile */}
              <div className="p-4 border-t border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-linear-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    AD
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium">Admin User</div>
                    <div className="text-gray-400 text-sm">Administrator</div>
                  </div>
                </div>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
