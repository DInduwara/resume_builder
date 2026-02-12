import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = { name: "John Doe" };
  const navigate = useNavigate();

  const logoutUser = () => {
    // later: clear auth state / tokens here
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-3.5 text-slate-800 transition-all">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            alt="Resume Builder logo"
            className="h-9 w-auto"
            src="/logo.svg"
          />
        </Link>

        {/* User + Logout */}
        <div className="flex items-center gap-4 text-sm">
          {/* User pill */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-semibold">
              {user?.name?.charAt(0)?.toUpperCase()}
            </div>
            <p className="text-slate-700 text-sm font-medium">
              Hi,&nbsp;{user?.name}
            </p>
          </div>

          {/* Logout button */}
          <button
            onClick={logoutUser}
            className="bg-indigo-600 text-white text-sm font-medium px-6 py-1.5 rounded-full shadow-sm hover:bg-indigo-700 active:scale-95 transition-transform"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
