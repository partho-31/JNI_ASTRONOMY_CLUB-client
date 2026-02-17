import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AuthProvider } from "@/context/AuthContext";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <SidebarProvider>
        {/* Sidebar + Content in same row */}
        <div className="flex w-full h-screen overflow-hidden">
          {/* Sidebar */}
          <AppSidebar />

          {/* Main Content */}
          <div className="flex flex-col flex-1 overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between fixed border-b w-full h-12 border-slate-600 bg-slate-900 items-center lg:hidden px-4 py-3">
              <SidebarTrigger className="lg:hidden" />
              <span className="text-xl font-bold text-white lg:hidden">
                Admin Dashboard
              </span>
            </div>

            {/* Content */}
            <div className="p-4">{children}</div>
          </div>
        </div>
      </SidebarProvider>
    </AuthProvider>
  );
};

export default DashboardLayout;
