"use client";

import { Spinner } from "@/components/ui/spinner";
import TrashOrSpinner from "@/components/ui/trashOrSpinner";
import {
  useDeleteEventMutation,
  useGetEventQuery,
} from "@/redux/features/event/eventApi";
import { Event } from "@/types/event";

import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const Page = () => {
  const { data, isLoading } = useGetEventQuery([]);
  const [deleteEvent] = useDeleteEventMutation();

  const handleEventDeletion = async (id: string) => {
    const res = await deleteEvent(id);
    if (res.error) {
      toast.error("Something went wrong!");
    } else {
      toast.success("Magazine has been deleted");
    }
  };

  const now = new Date();

  const upcomingEvent = data?.filter(
    (a: Event) => new Date(a.start_time) > now,
  ).length;

  const completedEvent = data?.filter(
    (a: Event) => new Date(a.end_time) < now,
  ).length;

  const ongoingEvent = data?.filter(
    (a: Event) => new Date(a.start_time) <= now && new Date(a.end_time) >= now,
  ).length;

  return (
    <div className="w-full py-10 md:py-0">
      {/* Header */}
      <header className="bg-slate-800 border-b flex justify-between border-slate-700 p-6">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Events Management</h1>
            <p className="text-gray-400">Manage all event and their status</p>
          </div>
        </div>
        <div>
         <Link href={"event/create"} > <button className="bg-linear-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-1 px-4 rounded-xl transition-all duration-200 transform hover:scale-105">
            Create events
          </button></Link>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
          <div className="text-2xl font-bold text-white">
            {data ? data.length : "0"}
          </div>
          <div className="text-gray-400 text-sm">Total Event</div>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
          <div className="text-2xl font-bold text-cyan-400">
            {" "}
            {upcomingEvent ? upcomingEvent : "0"}
          </div>
          <div className="text-gray-400 text-sm">Upcoming events</div>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
          <div className="text-2xl font-bold text-green-400">
            {ongoingEvent ? ongoingEvent : "0"}
          </div>
          <div className="text-gray-400 text-sm">Ongoing Events</div>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
          <div className="text-2xl font-bold text-purple-400">
            {completedEvent ? completedEvent : "0"}
          </div>
          <div className="text-gray-400 text-sm">Events Finished</div>
        </div>
      </div>

      {/* Loader  */}
      {isLoading && (
        <div className="flex justify-center mt-5">
          <Spinner />
        </div>
      )}

      {/* Card Section  */}
      <div className="grid grid-cols-1 p-6 gap-3">
        {data?.map((event: Event) => (
          <div
            key={event.id}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 md:px-8
               flex flex-col md:flex-row md:items-center md:justify-between 
               gap-4 hover:bg-slate-750 transition"
          >
            {/* Top: Avatar + Name + Email */}
            <div className="flex flex-col items-center gap-3 md:flex-row md:items-center">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image
                  height={40}
                  width={40}
                  src={`https://res.cloudinary.com/jniac-just/${event.image}`}
                  alt={"Profile Image"}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-white font-semibold">{event.title}</p>
                <p className="text-gray-400 text-sm">{event.type}</p>
              </div>
            </div>

            {/* Bottom row for small screen / Middle for large */}
            <div className="flex w-full md:w-auto justify-between items-center gap-3">
              {/* Role dropdown */}
              <div className="flex items-center gap-1">
                <span className="text-gray-300 text-sm">Status:</span>
                <select
                  className="bg-slate-700 border border-slate-600 text-white text-sm 
                     rounded-lg px-1 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option>Pending</option>
                  <option>Published</option>
                </select>
              </div>

              {/* Delete Button */}
              <TrashOrSpinner operation={() => handleEventDeletion(event.id)} />
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {(data?.length === 0 || data?.length == 0) && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔭</div>
          <h3 className="text-2xl font-bold text-gray-300 mb-2">
            No event found
          </h3>
          <p className="text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default Page;
