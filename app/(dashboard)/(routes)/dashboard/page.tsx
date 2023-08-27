"use client";

// imports
import { useRouter } from "next/navigation";

// external libraries/components
import { Card } from "@/components/Shadcn/card";

// internal components
import { dashboardData } from "@/app/api/data";

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the Power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI available in the world
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {dashboardData.map((data) => (
          <Card
            onClick={() => router.push(data.href)}
            key={data.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={`p-2 w-fit rounded-md ${data.bgColor}`}>
                <i className={`w-5 h-5 ${data.icon} ${data.color}`} />
              </div>
              <div className="font-semibold">{data.label}</div>
            </div>
            <i className="fa-solid fa-arrow-right w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
