import Link from "next/link";
// import { ModeToggle } from "../ui/modeToggle";
import { LogIn, UserRoundPlus } from "lucide-react"

const Navbar = () => {
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
              <Link href={"/"} className="text-white hover:bg-white/10 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <a className="text-white hover:bg-white/10 hover:text-white">
                Magazines
              </a>
            </li>
            <li>
              <Link href={'/articles'} className="text-white hover:bg-white/10 hover:text-white">
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
            <Link href="/" className="text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-300 group">
              <span className="group-hover:scale-110 transition-transform">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href={"/magazines"} className="text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-300 group">
              <span className="group-hover:scale-110 transition-transform">
                Magazines
              </span>
            </Link>
          </li>
          <li>
            <Link href={"/articles"} className="text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-300 group">
              <span className="group-hover:scale-110 transition-transform">
                Articles
              </span>
            </Link>
          </li>
          <li>
            <Link  href={"/members"} className="text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-300 group">
              <span className="group-hover:scale-110 transition-transform">
                Our Researchers
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className="text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-300 group"
            >
              <span className="group-hover:scale-110 transition-transform">
                About Us
              </span>
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-300 group">
              <span className="group-hover:scale-110 transition-transform">
                Contact Us
              </span>
            </Link>
          </li>
        </ul>
      </div>

      
        <div className="navbar-end  space-x-0">
          <Link href={"/login"}>
            <button className="flex items-center text-md gap-2 px-1 py-1 text-white/90 rounded-lg hover:bg-white/10  hover:text-white transition duration-200">
              <LogIn size={20}/>
              <span className="hidden sm:inline"> LogIn</span>
            </button>
          </Link>
          <Link href={"/registration"}>
            <button className="flex items-center text-md gap-2 px-1 py-1 text-white/90 rounded-lg hover:bg-white/10 hover:text-white transition duration-200">
              < UserRoundPlus size={20} />
              <span className="hidden sm:inline"> SignUp</span>
            </button>
          </Link> 
        {/* <div className="mx-2">
          <ModeToggle/>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
