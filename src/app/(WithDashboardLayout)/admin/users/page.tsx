"use client";

import { Spinner } from "@/components/ui/spinner";
import TrashOrSpinner from "@/components/ui/trashOrSpinner";
import {
  useDeleteUserMutation,
  useGetUserQuery,
} from "@/redux/features/user/userApi";
import { Member } from "@/types/member";
// import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { toast } from "sonner";
const Page = () => {
  const { data, isLoading } = useGetUserQuery(undefined);
  const [deleteUser] = useDeleteUserMutation();
  const [searchByKeyword, setSearchByKeyword] = useState<string>("");

  const filteredUser = useMemo(() => {
    return data?.filter((member: Member) =>
      searchByKeyword
        ? member.first_name
            .toLowerCase()
            .includes(searchByKeyword.toLowerCase()) ||
          member.last_name
            .toLowerCase()
            .includes(searchByKeyword.toLowerCase()) ||
          member.role.toLowerCase().includes(searchByKeyword.toLowerCase())
        : true,
    );
  }, [data, searchByKeyword]);

  const handleUserDeletion = async (id: string) => {
    const res = await deleteUser(id);
    if (res.error) {
      toast.error("Something went wrong!");
    } else {
      toast.success("User has been deleted");
    }
  };

  return (
    <div className="w-full py-10 md:py-0">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 p-6">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Users Management</h1>
            <p className="text-gray-400">
              Manage all registered users and their roles
            </p>
          </div>
          <div className="flex  items-center gap-4">
            <div className="relative">
              <input
                value={searchByKeyword}
                onChange={(e) => setSearchByKeyword(e.target.value)}
                type="text"
                placeholder="Search users..."
                className="bg-slate-700  border border-slate-600 rounded-lg py-2 px-4 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-64"
              />
              <div className="absolute left-3 top-2 text-gray-400">🔍</div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
          <div className="text-2xl font-bold text-white">
            {data ? data.length : "0"}
          </div>
          <div className="text-gray-400 text-sm">Total Users</div>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
          <div className="text-2xl font-bold text-cyan-400">23</div>
          <div className="text-gray-400 text-sm">Administrators</div>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
          <div className="text-2xl font-bold text-purple-400">45</div>
          <div className="text-gray-400 text-sm">Editors</div>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
          <div className="text-2xl font-bold text-green-400">1,179</div>
          <div className="text-gray-400 text-sm">Readers</div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="px-6 pb-4 flex items-center gap-5 justify-between">
        <div className="flex items-center gap-4">
          <select className="bg-slate-700 border border-slate-600 rounded-lg py-2 px-2 md:px-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500">
            <option>All Roles</option>
            <option>Administrator</option>
            <option>Editor</option>
            <option>Reader</option>
          </select>
        </div>
        <div className="text-gray-400 text-sm">
          Showing {filteredUser?.length} users
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
        {filteredUser?.map((user: Member) => (
          <div
            key={user.id}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 md:px-8
               flex flex-col md:flex-row md:items-center md:justify-between 
               gap-4 hover:bg-slate-750 transition"
          >
            <div className="flex flex-col items-center gap-3 md:flex-row md:items-center">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image
                  height={40}
                  width={40}
                  src={`https://res.cloudinary.com/jniac-just/${user?.image}`}
                  alt={"Profile Image"}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-white font-semibold">
                  {user.first_name} {user.last_name}
                </p>
                <p className="text-gray-400 text-sm">{user.email}</p>
              </div>
            </div>

            {/* Bottom row for small screen / Middle for large */}
            <div className="flex w-full md:w-auto justify-between items-center gap-3">
              {/* Role  */}
              <div className="flex items-center gap-1">
                <span className="text-gray-300 text-sm">Role: {user.role}</span>
              </div>

              {/* Delete Button */}
              <TrashOrSpinner  operation={() => handleUserDeletion(user.id)}  />
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredUser?.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔭</div>
          <h3 className="text-2xl font-bold text-gray-300 mb-2">
            No user found
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
