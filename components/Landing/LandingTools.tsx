"use client";

import { Card, CardHeader, CardTitle } from "@/components/Shadcn/card";
import { landingToolsData } from "@/app/api/data";
import Link from "next/link";

const LandingTools = () => {
  return (
    <div className="w-full px-10 pt-5 pb-10 md:pb-20 flex items-center justify-center bg-gradient-to-r from-[#e8f0f4] to-[#f7fafb] text-[#1e2521]">
      <div className="w-full max-w-7xl">
        <h2 className="text-center text-4xl font-light pt-3 mb-10">Tools</h2>
        <div className="grid justify-between grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {landingToolsData.map((tool, index) => (
            <Link
              key={index}
              href={tool.href}
              className={`${
                (index === 1 || index === 3 || index === 4) && "md:col-span-2"
              }`}
            >
              <Card className={`border-none shadow-xl ${tool.bgColor}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-x-2">
                    <div className="w-full flex flex-col items-center justify-center gap-2">
                      <span className={tool.color}>
                        <i className={tool.icon} />
                      </span>
                      <p className="text-lg">{tool.label}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingTools;
