"use client"
import { useGetEventQuery } from "@/redux/features/event/eventApi";
import { Event } from "@/types/event";
import { useMemo } from "react";

export default function Ticker() {

     const { data } = useGetEventQuery([]);
      const latestEvent: Event = useMemo(() => {
        if (!data || data.length === 0) return null;
    
        return [...data].sort(
          (a: Event, b: Event) =>
            new Date(b.start_time).getTime() - new Date(a.start_time).getTime(),
        )[0];
      }, [data]);

  const headlines = [
   
    `**Upcoming event : ${latestEvent?.title} (${latestEvent?.type.toUpperCase()}), ${new Date(latestEvent?.start_time).toDateString()} `,
  ];

  return (
    <div className="fixed top-0 left-0 w-full mt-20 z-50 overflow-hidden pointer-events-none">
      <div className="flex whitespace-nowrap animate-scroll">
        {headlines.map((text, i) => (
          <span
            key={i}
            className="mx-8 font-medium text-white drop-shadow-lg"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}