import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Notification } from "./Notification";
import { Sidebar } from "./SideBar";
import { TopBar } from "./TopBar";

export const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(false)}
      />
      <div className="flex flex-col flex-1">
        <TopBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="p-6 flex-1 overflow-auto">
          <div className="grid grid-cols-[1fr_250px] max-md:grid-cols-1 gap-3">
            {<Outlet />}
            <Notification />
          </div>
        </main>
      </div>
    </div>
  );
};
