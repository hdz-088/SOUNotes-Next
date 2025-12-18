"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
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

import EventList, { events } from "./Events";

export function SheetDemo() {
  // Group dates by event type (holiday, exam, etc.)
  const modifiers = {
    holiday: [],
    term: [],
    exams: [],
    result: [],
    default: [],
  };

  events.forEach((event) => {
    const startDate = new Date(event.from);
    const endDate = new Date(event.to);
    const type = event.type || "default";

    // Loop through dates from start to end
    for (
      let dt = new Date(startDate);
      dt <= endDate;
      dt.setDate(dt.getDate() + 1)
    ) {
      if (modifiers[type]) {
        modifiers[type].push(new Date(dt));
      } else {
        modifiers["default"].push(new Date(dt));
      }
    }
  });

  const modifiersClassNames = {
    holiday: "text-[#fd5f5f] font-bold",
    term: "text-[#d373ff] font-bold",
    exams: "text-[#14a82d] font-bold",
    result: "text-[#1da5f4] font-bold",
    default: "text-[#ce9fc1] font-bold",
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <CalendarIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all hover:cursor-pointer" />
        </Button>
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
          <Calendar
            modifiers={modifiers}
            modifiersClassNames={modifiersClassNames}
          />
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
