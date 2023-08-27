"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarData } from "@/app/api/data";
import "./sidebar.css";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="sidebar_wrapper space-y-4 py-4 flex flex-col h-full text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">TalkEasy</h1>
        </Link>

        <div className="space-y-1">
          {sidebarData.map((data, index) => (
            <Link
              href={data.href}
              key={index}
              className={`sidebar_item text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition
                ${
                  pathname === data.href
                    ? "text-white bg-white/10"
                    : "text-zinc-400"
                }
              `}
            >
              <div className="flex items-center flex-1">
                <i className={`sidebar_icon mr-3 ${data.icon} ${data.color}`} />
                {data.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
