"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarData } from "@/app/api/data";
import "./sidebar.css";

import { Yatra_One } from "next/font/google";

const font = Yatra_One({
  weight: "400",
  subsets: ["latin"],
});

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="sidebar_wrapper space-y-4 py-4 flex flex-col h-full text-white shadow-xl">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <h1 className={`text-2xl font-bold ${font.className}`}>
            <span className="text-4xl">T</span>alk
            <span className="text-4xl">E</span>asy
          </h1>
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
              <div
                className={`flex items-center flex-1 ${
                  pathname === data.href ? "font-regular text-lg" : "font-light"
                }`}
              >
                <i
                  className={`sidebar_icon mr-3 text-2xl ${data.icon} ${data.color}`}
                />
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
