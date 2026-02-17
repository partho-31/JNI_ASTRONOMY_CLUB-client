"use client";

import Link from "next/link";
import { LogIn, UserRoundPlus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContext, useState } from "react";
import Image from "next/image";
import AuthContext from "@/context/AuthContext";
import { logoutUser } from "@/services/authServices";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = async () => {
    const response = await logoutUser();
    if (response.success) {
      toast.success("Logout successful");
      setUser(null);
      router.push("/");
      router.refresh();
    }
  };

  const [open, setOpen] = useState(false);
  return (
    <div className="navbar fixed top-0 z-50 bg-transparent backdrop-blur-md bg-opacity-20 border-b border-white/10 p-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white hover:bg-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100/95 backdrop-blur-lg rounded-box z-1 mt-3 w-52 p-2 shadow-xl border border-white/20"
          >
            <li>
              <Link
                href={"/"}
                className="text-white hover:bg-white/10 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <a className="text-white hover:bg-white/10 hover:text-white">
                Magazines
              </a>
            </li>
            <li>
              <Link
                href={"/articles"}
                className="text-white hover:bg-white/10 hover:text-white"
              >
                Articles
              </Link>
            </li>
            <li>
              <a className="text-white hover:bg-white/10 hover:text-white">
                Our Researchers
              </a>
            </li>

            <li>
              <Link
                href={"/about"}
                className="text-white hover:bg-white/10 hover:text-white"
              >
                About Us
              </Link>
            </li>
            <li>
              <a className="text-white hover:bg-white/10 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <a className="text-white text-xl font-bold ml-2 tracking-wider bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text">
          JNIAC
          <span className="text-cyan-300 text-lg ml-1">✧</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-0">
          <li>
            <Link
              href="/"
              className="text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-300 group"
            >
              <span className="group-hover:scale-110 transition-transform">
                Home
              </span>
            </Link>
          </li>
          {/* <li>
            <Link
              href="/events"
              className="text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-300 group"
            >
              <span className="group-hover:scale-110 transition-transform">
                Events
              </span>
            </Link>
          </li> */}
          <li>
            <Link
              href={"/magazines"}
              className="text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-300 group"
            >
              <span className="group-hover:scale-110 transition-transform">
                Magazines
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={"/articles"}
              className="text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-300 group"
            >
              <span className="group-hover:scale-110 transition-transform">
                Articles
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={"/members"}
              className="text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-300 group"
            >
              <span className="group-hover:scale-110 transition-transform">
                Our Team
              </span>
            </Link>
          </li>
          <li className="static">
            <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
              <DropdownMenuTrigger asChild>
                <span
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                  className="text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-300 group inline-flex items-center px-3 cursor-pointer"
                >
                  <span className="group-hover:scale-110 transition-transform">
                    Services
                  </span>
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                align="center"
                sideOffset={8}
                className="bg-base-100/95 backdrop-blur-lg border border-white/20 min-w-[180px] z-60"
              >
                <DropdownMenuItem className="text-white/90 hover:bg-white/10 hover:text-white cursor-pointer focus:bg-white/10 focus:text-white">
                  Privacy & Policy
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:bg-white/10 hover:text-white cursor-pointer p-0 focus:bg-white/10 focus:text-white">
                  <Link href={"/about"} className="w-full px-2 py-1.5 block">
                    About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:bg-white/10 hover:text-white cursor-pointer p-0 focus:bg-white/10 focus:text-white">
                  <Link href={"/contact"} className="w-full px-2 py-1.5 block">
                    Contact Us
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </div>

      {!user ? (
        <div className="navbar-end space-x-0">
          <Link href={"/login"}>
            <button className="flex items-center text-md gap-2 px-1 py-1 text-white/90 rounded-lg hover:bg-white/10 hover:text-white transition duration-200">
              <LogIn size={20} />
              <span className="hidden sm:inline">LogIn</span>
            </button>
          </Link>

          <Link href={"/register"}>
            <button className="flex items-center text-md gap-2 px-1 py-1 text-white/90 rounded-lg hover:bg-white/10 hover:text-white transition duration-200">
              <UserRoundPlus size={20} />
              <span className="hidden sm:inline">SignUp</span>
            </button>
          </Link>
        </div>
      ) : (
        <div className="navbar-end space-x-0">
          <div className="dropdown dropdown-end h-10 w-10">
            <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 border border-gray-400 rounded-full">
                <Image
                  alt="User avatar"
                  src={`https://res.cloudinary.com/jniac-just/${user.image}`}
                  // className=" object-contain"
                  width={10}
                  height={10}
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Link href={"/dashboard"}>
                <li>
                  <button className="justify-between">Dashboard</button>
                </li>
              </Link>

              <li>
                <button onClick={handleLogout}>Sign Out</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
