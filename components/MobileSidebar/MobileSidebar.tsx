"use client";

import { Button } from "@/components/Shadcn/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/Shadcn/sheet";
import Sidebar from "@/components/Sidebar/Sidebar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <i className="fa-solid fa-bars" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
