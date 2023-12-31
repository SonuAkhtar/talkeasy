"use client";

// imports
import { useEffect, useState } from "react";

// external libraries/components
import { Button } from "@/components/Shadcn/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/Shadcn/sheet";

// internal components
import Sidebar from "@/components/Sidebar/Sidebar";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

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
