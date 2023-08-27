"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Shadcn/card";

const tools = [
  {
    label: "Dashboard",
    icon: "fa-solid fa-table-columns",
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
  },
  {
    label: "Conversation",
    icon: "fa-solid fa-message",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generator",
    icon: "fa-solid fa-image",
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  {
    label: "Video Generator",
    icon: "fa-solid fa-video",
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "Music Generator",
    icon: "fa-solid fa-music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Code Generator",
    icon: "fa-solid fa-code",
    color: "text-green-700",
    bgColor: "bg-green-700/10",
  },
];

export const LandingTools = () => {
  return (
    <div className="w-full px-10 pt-5 pb-10 md:pb-20 flex items-center justify-center bg-gradient-to-r from-[#e8f0f4] to-[#f7fafb] text-[#1e2521]">
      <div className="w-full max-w-7xl">
        <h2 className="text-center text-4xl font-light pt-3 mb-10">Tools</h2>
        <div className="grid justify-between grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tools.map((item, index) => (
            <Card
              key={index}
              className={`border-none shadow-xl ${
                (index === 4 || index === 5) && "md:col-span-2"
              } ${item.bgColor}`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <span className={item.color}>
                      <i className={item.icon} />
                    </span>
                    <p className="text-lg">{item.label}</p>
                    <p className="text-zinc-400 text-sm">{item.title}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">{item.desc}</CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
