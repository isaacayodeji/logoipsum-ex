import { BellIcon, LogOutIcon, TimerIcon } from "@/assets/svg";
import { Menu, Search, SunMedium } from "lucide-react";
import { Input } from "@/components/ui/input";

export const TopBar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="shadow-sm p-4 flex justify-between items-center">
      {/* Menu Button (Hidden on Desktop) */}
      <button onClick={toggleSidebar} className="p-2 md:hidden">
        <Menu className="w-6 h-6" />
      </button>

      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="flex gap-2 items-center">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <div className="flex max-md:hidden h-10 w-full items-center bg-gray-200 rounded-md border border-input  px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
            <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            <Input
              type="search"
              placeholder="Search"
              className="flex-1 border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <div className="ml-2 flex items-center justify-center rounded-sm bg-gray-200 px-1 text-xs text-gray-600 ">
              <span>⌘/</span>
            </div>
            {/* <Mail className="mr-2 h-4 w-4 shrink-0 opacity-50" /> */}
          </div>
        </div>
        <SunMedium />
        <img src={TimerIcon} alt="" loading="lazy" />
        <button className="p-2 relative">
          <img src={BellIcon} alt="" loading="lazy" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>
        <img src={LogOutIcon} alt="" loading="lazy" />
      </div>
    </header>
  );
};
