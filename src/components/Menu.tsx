import { Link } from "react-router-dom";
import {
  LayoutGrid,
  Hourglass,
  ListChecks,
  User,
  Settings,
} from "lucide-react";
import {
  AdminIcon,
  AuditIcon,
  KYCIcon,
  ReportIcon,
  UserIcon,
} from "@/assets/svg";

export const AppMenu = () => {
  return (
    <nav className="flex flex-col gap-3 mt-8 md:mt-0">
      <Link
        key={1}
        to="/"
        className="hover:bg-gray-300 flex gap-2 text-[0.85rem] hover:text-white p-2 rounded-md items-center"
      >
        <LayoutGrid color="black" fill="black" size={15} />
        <span className="font-[inter-semibold]">Dashboard</span>
      </Link>
      <Link
        key={1}
        to="/requests"
        className="hover:bg-gray-300 flex gap-2 text-[0.85rem] hover:text-white p-2 rounded-md items-center"
      >
        <Hourglass size={15} />
        <span className="">Requests</span>
      </Link>
      <div className="border-[#F0ECEC] border-[1px]"></div>
      <Link
        key={1}
        to="/"
        className="hover:bg-gray-300 flex gap-2 text-[0.85rem] hover:text-white p-2 rounded-md items-center m"
      >
        <img src={KYCIcon} loading="lazy" alt="" />
        <span className="">KYC</span>
      </Link>
      <Link
        key={1}
        to="/"
        className="hover:bg-gray-300 flex gap-2 text-[0.85rem] hover:text-white p-2 rounded-md items-center m"
      >
        <img src={ReportIcon} loading="lazy" alt="" />
        <span className="">Reports</span>
      </Link>
      <Link
        key={1}
        to="/"
        className="hover:bg-gray-300 flex gap-2 text-[0.85rem] hover:text-white p-2 rounded-md items-center m"
      >
        <ListChecks size={15} />
        <span className="">Tasks</span>
      </Link>
      <div className="border-[#F0ECEC] border-[1px]"></div>
      <Link
        key={1}
        to="/"
        className="hover:bg-gray-300 flex gap-2 text-[0.85rem] hover:text-white p-2 rounded-md items-center m"
      >
        <img src={AuditIcon} loading="lazy" alt="" />
        <span className="">Audit Trail</span>
      </Link>
      <Link
        key={1}
        to="/"
        className="hover:bg-gray-300 flex gap-2 text-[0.85rem] hover:text-white p-2 rounded-md items-center m"
      >
        <User size={15} />
        <span className="">Customers</span>
      </Link>
      <div className="border-[#F0ECEC] border-[1px]"></div>
      <Link
        key={1}
        to="/"
        className="hover:bg-gray-300 flex gap-2 text-[0.85rem] hover:text-white p-2 rounded-md items-center m"
      >
        <img src={UserIcon} loading="lazy" alt="" />
        <span className="">Users</span>
      </Link>
      <Link
        key={1}
        to="/"
        className="hover:bg-gray-300 flex gap-2 text-[0.85rem] hover:text-white p-2 rounded-md items-center m"
      >
        <Settings size={15} />
        <span className="">Settings</span>
      </Link>
      <Link
        key={1}
        to="/"
        className="hover:bg-gray-300 flex gap-2 text-[0.85rem] hover:text-white p-2 rounded-md items-center m"
      >
        <img src={AdminIcon} loading="lazy" alt="" />
        <span className="">Administration</span>
      </Link>
    </nav>
  );
};
