"use client";

import { Card, CardHeader, CardTitle } from "@/components/Shadcn/card";
import { landingToolsData } from "@/app/api/data";

export const LandingTools = () => {
  return (
    <div className="w-full px-10 pt-5 pb-10 md:pb-20 flex items-center justify-center bg-gradient-to-r from-[#e8f0f4] to-[#f7fafb] text-[#1e2521]">
      <div className="w-full max-w-7xl">
        <h2 className="text-center text-4xl font-light pt-3 mb-10">Tools</h2>
        <div className="grid justify-between grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {landingToolsData.map((tool, index) => (
            <Card
              key={index}
              className={`border-none shadow-xl ${
                (index === 1 || index === 3 || index === 4) && "md:col-span-2"
              } ${tool.bgColor}`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <span className={tool.color}>
                      <i className={tool.icon} />
                    </span>
                    <p className="text-lg">{tool.label}</p>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
