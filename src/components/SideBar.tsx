import { Avatar, Logo } from "@/assets/svg";
import classNames from "classnames";
import { X } from "lucide-react";
import { AppMenu } from "./Menu";

export const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={classNames(
          "fixed inset-0 backdrop-blur-sm bg-opacity-30 transition-opacity md:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <aside
        className={classNames(
          "fixed md:relative top-0 left-0 shadow-md h-screen p-4 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64",
          "md:w-55 md:translate-x-0"
        )}
      >
        {/* Close Button for Mobile */}
        <button
          onClick={toggleSidebar}
          className="md:hidden absolute top-4 right-4"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex flex-col justify-between min-h-[80vh] pt-2">
          <div className="flex flex-col px-3 gap-9">
            {" "}
            <img src={Logo} loading="lazy" alt="Logo" className="w-[7rem]" />
            <AppMenu/>
          </div>
          <div className="flex gap-1 items-center px-3">
            <img src={Avatar} alt="" />
            <span className="text-[0.85rem]">ByeWind</span>
          </div>
        </div>
      </aside>
    </>
  );
};
