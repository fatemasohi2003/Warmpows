import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
// import { FaPaw } from "react-icons/fa"; // Removed external dependency

// Paw Icon SVG (Replacement for FaPaw)
const PawIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 576 512" 
    className={className} 
    fill="currentColor"
  >
    <path d="M288 0c-44.5 0-80 35.5-80 80s35.5 80 80 80s80-35.5 80-80s-35.5-80-80-80zM128 160c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48zM448 160c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48zM288 288c-61.9 0-112 50.1-112 112s50.1 112 112 112s112-50.1 112-112s-50.1-112-112-112z"/>
  </svg>
);


const Navbar = () => {
  // NOTE: If you still see the error "Could not resolve ../context/AuthContext", 
  // please ensure that the AuthContext.jsx file exists in your src/context/ folder.
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch(() => {
        toast.error("Error logging out");
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500 font-bold" : ""}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className={({ isActive }) => isActive ? "text-orange-500 font-bold" : ""}>
          Services
        </NavLink>
      </li>
      {/* My Profile লিঙ্কটি এখন শর্ত ছাড়াই সব সময় দেখানো হবে। */}
      <li>
        <NavLink to="/my-profile" className={({ isActive }) => isActive ? "text-orange-500 font-bold" : ""}>
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
          <PawIcon className="w-6 h-6 text-orange-500" /> {/* FaPaw replaced with PawIcon */}
          <span className="font-bold">WarmPaws</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {/* user.photoURL না থাকলে ডিফল্ট ছবি দেখাবে */}
                  <img alt={user.displayName || "User"} src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"} />
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li className="menu-title"><span>{user.displayName || "User"}</span></li>
                <li><Link to="/my-profile">My Profile</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm btn-outline btn-primary">Login</Link>
            <Link to="/signup" className="btn btn-sm btn-primary">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
