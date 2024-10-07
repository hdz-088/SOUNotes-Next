"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
// import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import EventList from "./Events";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* <Button variant="outline"> */}
        <CalendarIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all hover:cursor-pointer" />
        {/* </Button> */}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <h1 className="text-xl text-[#ce9fc1] font-bold text-center">
              Academic Calendar
            </h1>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4 items-center">
          <Calendar />
          <EventList />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            {/* <Button type="submit">Save changes</Button> */}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
